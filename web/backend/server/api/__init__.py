# coding: utf-8
from decsvr.DecServer import DecServer

from router.version import router as version_router
from router.db import router as db_router

class APIServer(DecServer):
    def __init__(self, port = 9001):
        DecServer.__init__(self, port)

        self.incude_router(version_router)
        self.incude_router(db_router)