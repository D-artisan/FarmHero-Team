from django.urls import path
from users import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('usermgmt/register-email/',  views.register, name='register-email'),
    path("usermgmt/logout/",    views.logout_view, name="logout-user"),
    path('usermgmt/login/', views.user_signin_view, name='login'),

    #For password reset
    path('usermgmt/forgotPassword/', views.forgotPassword, name='forgotPassword'),
    path('usermgmt/resetPassword/<uidb64>/<token>/', views.resetPassword, name='resetPassword'),

    #For email verification
    path('usermgmt/activate/<uidb64>/<token>/', views.activate, name='activate'),

    path("usermgmt/token/",          views.user_signin_view, name="new-token"),
    path("usermgmt/token/refresh/",  TokenRefreshView.as_view(), name="refresh-token"),
]

# path('usermgmt/resetpassword_validate/<uidb64>/<token>/', views.resetpassword_validate, name='resetpassword_validate'),