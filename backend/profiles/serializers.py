from rest_framework import serializers
from django.db.utils import IntegrityError
from rest_framework.validators import UniqueTogetherValidator
from profiles.models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    created_by = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )
    position = serializers.CharField()

    # PositionSerializer(read_only=False, required=False)

    class Meta:
        model = Profile
        fields = '__all__'
        validators = [
            UniqueTogetherValidator(
                queryset=Profile.objects.all(),
                fields=["name", "alias", "position", "election"]
            )
        ]

    def create(self, validated_data):
        try:
            profile = Profile(**validated_data)
            profile.save()

        except IntegrityError:
            raise serializers.ValidationError({
                "message": ["You have added a profile with similar data already."],
                'fields': [
                    "id_number",
                ]
            })
        return profile
