#!/bin/bash
python3 -m venv venv
venv/bin/pip install -r requirements.txt
venv/bin/python -m fastapi dev src/api/main.py
