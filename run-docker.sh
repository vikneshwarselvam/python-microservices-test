#!/bin/sh
gnome-terminal --tab --title="admin" --command="bash -c 'cd admin; sudo docker-compose up; $SHELL'" --tab --title="main" --command="bash -c 'cd main; sudo docker-compose up; $SHELL'" --tab --title="frontend" --command="bash -c 'cd frontend; sudo docker-compose up; $SHELL'"
