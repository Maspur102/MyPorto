from flask import Flask, render_template, request, flash, redirect, url_for

app = Flask(__name__)
app.secret_key = 'kunci_rahasia_portofolio_saya_bebas_diisi_apa_saja' 

# Route untuk Beranda (Hero Section)
@app.route('/')
def index():
    return render_template('index.html')

# Route untuk Halaman Tentang Saya
@app.route('/about')
def about():
    return render_template('about.html')

# Route untuk Halaman Keahlian
@app.route('/skills')
def skills():
    return render_template('skills.html')

# Route untuk Halaman Proyek
@app.route('/projects')
def projects():
    return render_template('projects.html')

# Route untuk Halaman Kontak (Menerima GET dan POST)
@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        nama = request.form.get('nama')
        email = request.form.get('email')
        pesan = request.form.get('pesan')
        
        if nama and email and pesan:
            flash(f'Terima kasih {nama}! Pesan Anda telah berhasil dikirim.', 'success')
        else:
            flash('Gagal! Pastikan semua kolom formulir terisi.', 'error')
            
        return redirect(url_for('contact'))
        
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)