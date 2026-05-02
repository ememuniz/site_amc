import './CriarPost.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill, { Quill } from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const Size = Quill.import('formats/size');
Size.whitelist = ['small', 'normal', 'large', 'huge'];
Quill.register(Size, true);

const Font = Quill.import('formats/font');
Font.whitelist = ['sans-serif', 'serif', 'monospace', 'roboto'];
Quill.register(Font, true);


export default function CriarPost() {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const navigate = useNavigate();

  const modules = {
    toolbar: [
      [{ 'font': Font.whitelist }],
      [{ 'size': Size.whitelist }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'align': [] }],
      ['link', 'image', 'video'],
      ['clean']
    ],
  };

  const handleSalvar = async () => {
    const payload = {
      titulo,
      corpo: conteudo,
      data: new Date().toISOString()
    };
    
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3000/api/posts/register', {
        method: 'POST',
        headers: { 
          'content-type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      }); 
      if (response.ok) {
        navigate('/dashboard/member');
      }
      else {
        const errorData = await response.json();
        alert(`Erro: ${errorData.error}`)
      }
    } catch (error) {
      console.error("Erro ao salvar:", error);
      alert('Erro na conexão com o servidor');
    }
  }
  return (
    <div className = 'postagem-container'>
      <main className = 'conteudo-principal'>
        <header className = 'header-postagem'>
          <h1>Nova Postagem de Vlog</h1>
          <button className = 'btn-publicar' onClick={handleSalvar}>
            Publicar Post
          </button>
        </header>

        <div className='card-editor'>
          <input
            type="text"
            className="input-titulo"
            placeholder="Digite o título aqui ..."
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)} 
          />

          <ReactQuill
            theme="snow"
            modules={modules}
            value={conteudo}
            onChange={setConteudo}
            placeholder='Escreva o conteúdo da sua postagem...'
          />
        </div>
      </main>
    </div>
  );
};