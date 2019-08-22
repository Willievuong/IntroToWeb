import requests


r = requests.get('SOME URL')
if(r.status_code == requests.codes.ok):
    print("Success")