from django.urls import path
from profiles import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from django.urls import path
from profiles.views import (

    ProfileListView,
    ProfileCreateView,
    ProfileDetailView,
    ProfileUpdateView,
    ProfileDeleteView
)

urlpatterns = [
    # path('usermgmt/register-user/',  views.register, name='register'),
    path('profile/', ProfileListView.as_view()),
    path('profile/create/', ProfileCreateView.as_view()),
    path('profile/<int:pk>/', ProfileDetailView.as_view()),
    path('profile/<int:pk>/update/', ProfileUpdateView.as_view()),
    path('profile/<int:pk>/delete/', ProfileDeleteView.as_view()),
]
