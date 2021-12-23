from django.contrib import auth
from users.models import Account
from users import serializers as custom_serializers

from django.db.models import Q
from django.http.response import JsonResponse
from django.core.files.storage import default_storage
from django.contrib.auth.hashers import make_password, check_password

# Email
from django.core.mail import EmailMessage, EmailMultiAlternatives
from django.utils.encoding import force_bytes
from django.template.loader import render_to_string
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode

from rest_framework import status
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import get_object_or_404
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken


def generate_user_token(user_obj, serialized_data=None):
    refresh = RefreshToken.for_user(user_obj)
    res = {
        "refresh": str(refresh),
        "access": str(refresh.access_token),
    }
    if serialized_data is not None:
        res.update(serialized_data)
        # print(res)
    return res


# Create your views here.
@api_view(('POST',))
@permission_classes([permissions.AllowAny])
def register(request):
    # try:
    password = request.POST.get('password')
    print(request.data)
    serializer_data = custom_serializers.UserRegistrationSerializer(data=request.POST)
    print('Valid:', serializer_data.is_valid())
    if serializer_data.is_valid():
        user = serializer_data.save()
        user.set_password(password)
        user.save()

        # USER ACTIVATION
        mail_subject = "Please activate your account"
        message = render_to_string('accounts/verify_account_template copy.html', {
            'user': user,
            'uid': urlsafe_base64_encode(force_bytes(user.pk)),
            'token': default_token_generator.make_token(user),
        })
        to_email = user.email
        send_email = EmailMultiAlternatives(mail_subject, message, to=[to_email])
        send_email.content_subtype = "html"
        try:
            send_email.send()
        except Exception as e:
            print(e)
            return JsonResponse(
                {
                    'message': 'Failed to send maail.',
                    'status': "failed",
                    # 'uid': urlsafe_base64_encode(force_bytes(user.pk)),
                    # 'token': default_token_generator.make_token(user),
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
        return JsonResponse(
            {
                'message': 'Please check your email address to complete the registration before the verification link expires.',
                'status': "success",
                # 'uid': urlsafe_base64_encode(force_bytes(user.pk)),
                # 'token': default_token_generator.make_token(user),
            },
            status=status.HTTP_201_CREATED
        )

    return JsonResponse(data=serializer_data.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
    # except Exception as e:
    #     return JsonResponse({'message': f'{e}' }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(('POST',))
@permission_classes([permissions.AllowAny])
def activate(request, uidb64, token):
    try:
        try:
            uid = urlsafe_base64_decode(uidb64).decode()
            user = Account._default_manager.get(pk=uid)
        except(TypeError, ValueError, OverflowError, Account.DoesNotExist) as e:
            print(e)
            user = None
        if user is not None and default_token_generator.check_token(user, token):
            user.is_active = True
            user.is_admin = True
            user.save()

            serializer_data = custom_serializers.UserRegistrationSerializer(user)
            res = generate_user_token(user, serializer_data.data)
            res['status'] = "success"
            return JsonResponse(data=res, status=status.HTTP_201_CREATED)
            # return JsonResponse({'message': 'Thank you for your email confirmation. Now you can login your account.'})
        else:
            if user is not None:
                user.delete()
            return JsonResponse({'message': 'uid/token is either invalid or expired. Please try and register again.',
                                 'status': "failed", })
    except Exception as e:
        print(e)
        return JsonResponse({'message': 'Server error', 'status': "failed"},
                            status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# @api_view(('POST',))
# @permission_classes([permissions.AllowAny])
# def login(request):
#     try:
#         id  = request.POST.get('id' or None)
#         password   = request.POST.get('password' or None)

#         user = get_object_or_404(Account, Q(email=id))
#         if user.check_password(password):
#             serializer_data = custom_serializers.UserSerializer(user)
#             res = generate_user_token(user, serializer_data.data)
#             res['status'] = "success"
#             return JsonResponse(data=res, status = status.HTTP_201_CREATED)
#         return JsonResponse(data={'message': 'Incorrect password.', 'status': "failed"}, status = status.HTTP_422_UNPROCESSABLE_ENTITY)
#     except Exception as e:
#         return JsonResponse({'message': f'{e}', 'status': "failed",}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def user_signin_view(request):
    try:
        email = request.data.get('email')
        password = request.data.get('password')
        if email is None and password is None:
            response = {
                'email': ['email field is required'],
                'password': ['password field is required'],
            }
            return JsonResponse(response, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        if email is None:
            response = {
                'email': ['email field is required'],
            }
            return JsonResponse(response, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        if password is None:
            response = {
                'password': ['password field is required'],
            }
            return JsonResponse(response, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

        try:
            user = get_object_or_404(Account, email__iexact=email)
        except Exception as e:
            response = {
                'message': ['Account does not exist.'],
            }
            return JsonResponse(response, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

        if not user.is_active:
            response = {
                'message': ['Account is not verified'],
            }
            return JsonResponse(response, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

        if user.check_password(password):
            res = generate_user_token(user)
            return JsonResponse(data=res, status=status.HTTP_201_CREATED)
        return JsonResponse(data={'message': ['Your email address or password is incorrect.']},
                            status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    except Exception as e:
        print(e)
        return JsonResponse({'message': ['Server error.']}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(('POST',))
@permission_classes([permissions.AllowAny])
def logout_view(request):
    """
    Blacklist the refresh token:
        extract token from the header during logout
        request user and refresh token is provided
    """

    print(request.headers)
    refresh_token = request.data.get("refresh")
    if refresh_token is None:
        response = {
            'refresh': ['refresh field is required'],
        }
        return JsonResponse(response, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    try:
        token = RefreshToken(refresh_token)
        token.blacklist()
        response = {
            'status': 'success',
            'message': 'Successfully Logged Out',
        }
        return JsonResponse(response, status=status.HTTP_200_OK)
    except Exception as e:
        response = {
            'status': 'error',
            'message': 'Server error',
        }
        return JsonResponse(response, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(('POST',))
@permission_classes([permissions.AllowAny])
def forgotPassword(request):
    email = request.POST.get('email')
    if Account.objects.filter(email__iexact=email).exists():
        user = Account.objects.get(email__iexact=email)
        # RESET PASSWORD EMAIL
        mail_subject = "Reset your password"
        message = render_to_string('accounts/reset_password_template.html', {
            'user': user,
            'uid': urlsafe_base64_encode(force_bytes(user.pk)),
            'token': default_token_generator.make_token(user),
        })
        to_email = email
        send_email = EmailMultiAlternatives(mail_subject, message, to=[to_email])
        send_email.content_subtype = "html"
        send_email.send()

        message = 'Password reset email has been set to your email address.'
        status_msg = 'success'
        code = status.HTTP_200_OK

    else:
        status_msg = 'failed'
        code = status.HTTP_404_NOT_FOUND
        message = 'Account does not exist!'

    response = {
        'status': status_msg,
        'code': code,
        'message': message,
    }
    return JsonResponse(response)


@api_view(('POST',))
@permission_classes([permissions.AllowAny])
def resetpassword_validate(request, uidb64, token):
    try:
        uid = urlsafe_base64_decode(uidb64).decode()
        user = Account._default_manager.get(pk=uid)
    except (TypeError, ValueError, OverflowError, Account.DoesNotExist):
        user = None

    if user is not None and default_token_generator.check_token(user, token):
        request.session['uid'] = uid
        message = "Plese reset your password."
        status_msg = 'success'
        code = status.HTTP_200_OK

    else:
        message = "This password reset link has expired."
        status_msg = 'failed'
        code = status.HTTP_400_BAD_REQUEST

    response = {
        'status': status_msg,
        'code': code,
        'message': message,
        'data': {
            'uid': uid,
        }
    }
    return JsonResponse(response)


@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def resetPassword(request, uidb64, token):
    try:
        # Reset Password Validate first
        try:
            uid = urlsafe_base64_decode(uidb64).decode()
            user = Account._default_manager.get(pk=uid)
        except (TypeError, ValueError, OverflowError, Account.DoesNotExist):
            user = None

        if user is not None and default_token_generator.check_token(user, token):
            password = request.POST.get('password')
            confirm_password = request.POST.get('confirm_password')

            data = request.POST
            serializer_data = custom_serializers.ChangePasswordSerializer(data=data)
            if serializer_data.is_valid():
                if password == confirm_password:
                    user.set_password(password)
                    user.save()

                    res = generate_user_token(user, serializer_data.data)
                    response = {
                        'status': 'success',
                        'code': status.HTTP_202_ACCEPTED,
                        'message': 'Password updated successfully',
                        'token': {
                            'refresh': res['refresh'],
                            'access': res['access'],
                        }
                    }
                    return JsonResponse(response)
                else:
                    response = {
                        'status': "failed",
                        'code': status.HTTP_400_BAD_REQUEST,
                        'message': "Both passwords do not match.",
                    }
                return JsonResponse(response)
            else:
                return JsonResponse(data=serializer_data.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

        else:
            response = {
                'status': "failed",
                'code': status.HTTP_400_BAD_REQUEST,
                'message': "This password reset link has expired. Please try again.",
            }
            return JsonResponse(response)


    except Exception as e:
        print(e)
        return JsonResponse({'message': f'{e}', 'status': "failed"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



