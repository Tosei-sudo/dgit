# coding: utf-8
from main import MainServer
from api import APIServer
import threading

def start_api_server():
    api_server = APIServer()
    api_server.start()

def start_main_server():
    main_server = MainServer(9000)
    main_server.start()

def start_server():
    api_thread = threading.Thread(target=start_api_server)
    api_thread.start()
    
    main_thread = threading.Thread(target=start_main_server)
    main_thread.start()
    
    