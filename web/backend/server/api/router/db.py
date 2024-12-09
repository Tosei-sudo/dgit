# coding: utf-8
from sqlite import DB
from decsvr.DecServerRouter import DecServerRouter

import glob
import os

router = DecServerRouter()

@router.get('/api/db/list')
def version(request):
    env = request.query.get("env")[0]
    
    if env == 'development':
        path = r'C:/Users/tosei/work/python/dgit/work/data/db/*.db'
    elif env == 'staging':
        path = r'C:/Users/tosei/work/python/dgit/share/data/db/*.db'
    elif env == 'production':
        path = r'C:/Users/tosei/work/python/dgit/prod/data/db/*.db'
    
    files = map(os.path.basename, glob.glob(path))
    
    return files

@router.get('/api/db/tables')
def tables(request):
    env = request.query.get("env")[0]
    db = request.query.get("db")[0]
    
    if env == 'development':
        path = r'C:/Users/tosei/work/python/dgit/work/data/db/' + db
    elif env == 'staging':
        path = r'C:/Users/tosei/work/python/dgit/share/data/db/' + db
    elif env == 'production':
        path = r'C:/Users/tosei/work/python/dgit/prod/data/db/' + db
    
    db = DB(path)
    
    return db.execute("SELECT name FROM sqlite_master WHERE type='table';")

@router.get('/api/db/tables/all')
def tables_all(request):
    env = request.query.get("env")[0]
    db = request.query.get("db")[0]
    table = request.query.get("table")[0]
    
    if env == 'development':
        path = r'C:/Users/tosei/work/python/dgit/work/data/db/' + db
    elif env == 'staging':
        path = r'C:/Users/tosei/work/python/dgit/share/data/db/' + db
    elif env == 'production':
        path = r'C:/Users/tosei/work/python/dgit/prod/data/db/' + db
    
    db = DB(path)
    
    return db.execute("SELECT * FROM " + table + ";")