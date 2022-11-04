FROM mongo

COPY flags.json /flags.json

CMD mongoimport --uri mongodb://db:27017/multiflag --collection flags --drop --jsonArray --file /flags.json