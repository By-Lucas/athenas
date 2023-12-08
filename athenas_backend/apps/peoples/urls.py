from django.urls import path
from peoples.viewsets.viewsets import (PeopleCreateView, PeopleUpdateView, PeopleListView, 
                                       PeopleDetailView, PeopleDeleteView, PeopleSearchView)


app_name = 'people'

urlpatterns = [
    path('create', PeopleCreateView.as_view()),
    path('update/<int:id>', PeopleUpdateView.as_view()),
    path('all', PeopleListView.as_view()),
    path('<int:id>', PeopleDetailView.as_view()),
    path('delete/<int:id>/', PeopleDeleteView.as_view()),
    path('search/', PeopleSearchView.as_view()),
    
]
