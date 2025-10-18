<h1>📢 Penting!</h1>
<p>Sebelumnya saya sudah mencoba deploy tetapi tidak bisa dan saya sudah mencobanya berulang kali tetap hasilnya tidak bisa</p>
<p>
  Proyek ini merupakan implementasi arsitektur <strong>Model-View-Controller (MVC)</strong> menggunakan <strong>PHP Native</strong>.<br>
  Aplikasi ini telah dikonfigurasi agar berjalan menggunakan <strong>Virtual Host (vhost)</strong> dengan domain lokal:
  <code>uts-pweb.com</code>
</p>

<p>
  Proyek ini sudah tidak lagi diakses melalui <code>http://localhost/...</code>,<br>
  melainkan menggunakan virtual host dengan domain khusus.
</p>

<hr>

<h2>⚙️ Langkah Konfigurasi:</h2>

<ol>
  <li>
    <strong>Buka file hosts (Windows):</strong><br>
    <code>C:\Windows\System32\drivers\etc\hosts</code><br>
    Tambahkan baris berikut:<br>
    <pre><code>127.0.0.1    uts-pweb.com</code></pre>
  </li>

  <li>
    <strong>Edit konfigurasi Virtual Host Apache:</strong><br>
    Buka file:
    <code>xampp/apache/conf/extra/httpd-vhosts.conf</code><br>
    Tambahkan konfigurasi berikut:<br>
    <pre><code>&lt;VirtualHost *:80&gt;
    DocumentRoot "C:/xampp/htdocs/nama_proyek/public"
    ServerName uts-pweb.com
&lt;/VirtualHost&gt;</code></pre>
    <p>
      📝 <em>Catatan:</em> Ganti <code>nama_proyek</code> dengan <strong>nama folder proyek kamu</strong> di dalam folder <code>htdocs</code>.<br>
      Contoh jika folder proyek kamu bernama <code>mvc-uts</code>, maka barisnya menjadi:<br>
      <pre><code>DocumentRoot "C:/xampp/htdocs/mvc-uts/public"</code></pre>
    </p>
  </li>

  <li>
    <strong>Restart Apache</strong> melalui <em>XAMPP Control Panel</em>.
  </li>

  <li>
    Buka di browser:
    <a href="http://uts-pweb.com" target="_blank">http://uts-pweb.com</a>
  </li>
</ol>

<hr>

<p><em>Pastikan folder proyek berada di dalam <code>htdocs</code> dan BASEURL pada file konfigurasi sudah disesuaikan dengan domain baru.</em></p>
