# coding: utf-8
from decsvr.DecServer import DecServer

class MainServer(DecServer):
    def __init__(self, port = 9000):
        DecServer.__init__(self, port, True)