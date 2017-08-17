# Symfony3 ile Örnek Blog

### Symfony kurulumu

`git clone https://github.com/oytunyuksel/symfony-blog.git` komutu ile repo indirilir

`composer install` ile php kütüphaneleri yüklenir

app/config/parameters.yml dosyası ayarlanır

`php bin/console doctrine:database:create` komutu ile database kurulumu yapılır

`php bin/console doctrine:schema:create` komutu ile database tarafındaki yapı oluşturulur

`php bin/console fos:user:create admin admin@admin.com admin` komutu ile admin kullanıcısı oluşturulur

`php bin/console fos:user:promote admin ROLE_ADMIN` komutu ile admin kullanıcısına admin yetkisi verilir

`php bin/console assets:install --symlink` komutu ile gerekli assets yüklenir

### Frontend kurulumu

`yarn` ile frontent kütüphaneleri ve gulp yüklenir

`gulp` komutu ile frontend dosyaları için gerekli işlemler yapılır

Eğer **gulp** veya **yarn** yok ise `npm install -g gulp` ve `npm install -g yarn` komutları ile yüklenebilir

### Final

`php bin/console server:run` komutu ile sisteme giriş yapılabilir

localhost:8000 üzerinden web sitesine girilebilir

localhost:8000/admin adresi üzerinden admin panele girilebilir
