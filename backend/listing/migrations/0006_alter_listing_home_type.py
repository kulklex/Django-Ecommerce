# Generated by Django 4.1.2 on 2023-02-10 06:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listing', '0005_remove_listing_open_house'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listing',
            name='home_type',
            field=models.CharField(choices=[('Bungalow', 'Bungalow'), ('One Storey', 'One Storey'), ('Two Storey', 'Two Storey'), ('Three Storey', 'Three Storey'), ('Duplex', 'Duplex'), ('Multiple Storey', 'Multiple Storey')], default='Bungalow', max_length=50),
        ),
    ]