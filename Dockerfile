FROM ubuntu

WORKDIR /app

RUN apt update -y
RUN apt install nodejs -y
RUN apt install npm -y
RUN apt install imagemagick -y
RUN apt install ghostscript -y
RUN apt install poppler-utils -y
RUN apt install tesseract-ocr -y

COPY policy.xml /etc/ImageMagick-6/policy.xml

COPY . .

RUN npm install

CMD npm run dev
