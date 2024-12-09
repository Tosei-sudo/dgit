# coding: utf-8
from decsvr.DecServerRouter import DecServerRouter

router = DecServerRouter()

@router.get('/version')
def version(request):
    return {
        'version': '0.0.1'
    }