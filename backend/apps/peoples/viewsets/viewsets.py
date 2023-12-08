import jwt
import datetime

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed

from accounts.models import User
from peoples.models import PeopleModel
from peoples.serializers.serializers import PeopleSerializer


def user_authenticated(request):
    token = request.COOKIES.get('jwt')

    if not token:
        raise AuthenticationFailed('Usuário não autenticado!')

    try:
        payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        
    except jwt.ExpiredSignatureError:
        raise AuthenticationFailed('Usuário não autenticado!')

    user = User.objects.filter(id=payload['id']).first()
    return user


class PeopleCreateView(APIView):
    
    def post(self, request):
        user = user_authenticated(request=request)
        
        if user:
            serializer = PeopleSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)


class PeopleUpdateView(APIView):

    def put(self, request, id):
        user = user_authenticated(request=request)
        
        if user:
            people = PeopleModel.objects.filter(id=id).first()
            if not people:
                return Response({"error": "Pessoa não encontrada."}, status=404)

            serializer = PeopleSerializer(instance=people, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)


class PeopleListView(APIView):
    def get(self, request):
        #user = user_authenticated(request=request)
        
        #if user:
        people = PeopleModel.objects.all()
        serializer = PeopleSerializer(people, many=True)
        return Response(serializer.data)


class PeopleDetailView(APIView):
    def get(self, request, id):
        user = user_authenticated(request=request)
        
        if user:
            try:
                person = PeopleModel.objects.get(id=id)
            except PeopleModel.DoesNotExist:
                return Response({'error': 'Pessoa não encontrada.'}, status=404)

            serializer = PeopleSerializer(person)
            return Response(serializer.data)


class PeopleSearchView(APIView):
    def get(self, request):
        user = user_authenticated(request=request)
        
        if user:
            name = request.query_params.get('name')
            cpf = request.query_params.get('cpf')
            query = PeopleModel.objects.all()

            if name:
                query = query.filter(name__icontains=name)
            if cpf:
                query = query.filter(cpf=cpf)

            serializer = PeopleSerializer(query, many=True)
            return Response(serializer.data)
    
    
class PeopleDeleteView(APIView):
    def delete(self, request, id):
        user = user_authenticated(request=request)
        
        if user:
            try:
                person = PeopleModel.objects.get(id=id)
            except PeopleModel.DoesNotExist:
                return Response({'error': 'Pessoa não encontrada.'}, status=status.HTTP_404_NOT_FOUND)

            person.delete()
            return Response({'detail': 'Pessoa deletada com sucesso.'}, status=status.HTTP_204_NO_CONTENT)