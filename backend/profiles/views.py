import uuid
from users.models import Account
from django.shortcuts import get_object_or_404
import sqlite3
from django.conf import settings

from rest_framework import permissions, serializers
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    DestroyAPIView,
    UpdateAPIView
)

from profiles.models import Profile
from profiles.serializers import (
    ProfileSerializer
)
from rest_framework import status
from django.http.response import JsonResponse
from rest_framework.decorators import api_view, permission_classes


class ProfileListView(ListAPIView):
    serializer_class = ProfileSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        queryset = Profile.objects.none()
        try:
            user = get_object_or_404(Account, id=self.request.user.id)
            if user is not None:
                queryset = user.all_user_profiles.filter(created_by=user)
        except Exception:
            return queryset
        return queryset


class ProfileDetailView(RetrieveAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = (permissions.IsAuthenticated,)


class ProfileCreateView(CreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = (permissions.IsAuthenticated,)


class ProfileUpdateView(UpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = (permissions.IsAuthenticated,)


class ProfileDeleteView(DestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = (permissions.IsAuthenticated,)
