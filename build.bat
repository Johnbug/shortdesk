@echo off
del johnbugtool.nw /q
7z a johnbugtool.zip index.html package.json
ren johnbugtool.zip johnbugtool.nw
nw johnbugtool.nw