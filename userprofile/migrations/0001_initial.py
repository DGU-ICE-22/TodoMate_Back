# Generated by Django 4.2.9 on 2024-02-09 08:19

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("user", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Profile",
            fields=[
                (
                    "user",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE,
                        primary_key=True,
                        serialize=False,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
                ("job", models.CharField(max_length=32)),
                ("interest", models.CharField(max_length=128)),
                (
                    "profile_image",
                    models.ImageField(default="default.png", upload_to="profile/"),
                ),
            ],
        ),
    ]
