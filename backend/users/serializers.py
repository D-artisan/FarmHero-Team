from users.models import Account
from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ['id', 'user_type', 'phoneNumber', 'email', 'password']
        extra_kwargs = {
            "password":{'write_only':True},
            "is_active":{'required':False},
            "is_staff":{
                'write_only':False,
                'required':False
            },
            "is_superuser":{
                'write_only':False,
                'required':False
            },
            "is_admin":{
                'write_only':False,
                'required':False
            },
            "is_superadmin":{
                'write_only':False,
                'required':False
            },
            "groups":{
                'write_only':False,
                'required':False
            },
            "user_permissions":{
                'write_only':False,
                'required':False
            },
        }

    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance

class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ['first_name', 'last_name', 'email', 'password']

        extra_kwargs = {
            "password":{'write_only':True},
            "is_staff":{
                'write_only':False,
                'required':False
            },
            "is_admin":{
                'write_only':False,
                'required':False
            },
            "is_superuser":{
                'write_only':False,
                'required':False
            },
            "is_superadmin":{
                'write_only':False,
                'required':False
            },
            "groups":{
                'write_only':False,
                'required':False
            },
            "user_permissions":{
                'write_only':False,
                'required':False
            },
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        instance.save()
        return instance




class ChangePasswordSerializer(serializers.Serializer):
    model = Account

    """
    Serializer for password change endpoint.
    """
    # email        = serializers.CharField(required=True, style={'input_type':'email'})
    password = serializers.CharField(required=True)
    confirm_password = serializers.CharField(required=True)

    def validate_new_password(self, value):
        validate_password(value)
        return value


class UserSearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        exclude = [
            'password',
            'is_staff',
            'is_superuser',
            'groups',
            'user_permissions',
            'last_login',
            'is_active',
        ]

