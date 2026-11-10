# 🌿 Julia Machado | Casal Goma — Bio Links & Cupons

Página de links para bio do Instagram (`@juliasmachad`), moderna, ultra rápida e responsiva para todos os smartphones, tablets e computadores.

Inspirada na estética tropical e moderna do **Casal Goma**, com degradês em tons de **azul e verde-água / ciano neon** (`#00D2F4`), efeito glassmorphic (vidro fosco translúcido), e recursos interativos:
- ⚡ **Botão de 1 clique para copiar o cupom** com animação e notificação toast.
- 🔗 **Links diretos** para as lojas parceiras (Caffeine Army, Insider Store, YSY Acessórios).
- 🎬 **Canais integrados**: YouTube (@Casalgoma) e Instagram (@juliasmachad).
- ✉️ **Contato rápido**: Envio de e-mail e botão de copiar e-mail.
- 📲 **Botão de compartilhamento** nativo para WhatsApp e Stories.

---

## 🚀 Como testar localmente no seu computador

Basta dar dois cliques no arquivo `index.html` ou abri-lo no Google Chrome / Safari / Edge.

---

## 📸 Como trocar a foto de perfil

1. Pegue uma foto sua quadrada (ex: `minha-foto.jpg` ou `minha-foto.png`).
2. Coloque a foto dentro da pasta `assets/`.
3. Abra o arquivo `index.html` e na linha 36 altere:
   ```html
   <img src="assets/avatar.svg" alt="Julia Machado" class="avatar-img" id="avatarImg">
   ```
   para:
   ```html
   <img src="assets/minha-foto.jpg" alt="Julia Machado" class="avatar-img" id="avatarImg">
   ```

---

## 🌐 Como subir no GitHub e publicar na Vercel (Passo a Passo)

### Passo 1: Criar repositório no GitHub
1. Acesse [github.com](https://github.com) e faça login na sua conta.
2. Clique no botão verde **"New"** (ou acesse [github.com/new](https://github.com/new)).
3. No campo **Repository name**, digite por exemplo: `links-juliamachado` ou `casalgoma-bio`.
4. Deixe como **Public** e clique em **"Create repository"** (não precisa marcar README nem licença).

### Passo 2: Enviar os arquivos pelo Terminal
No seu Mac, abra o **Terminal**, navegue até esta pasta e execute os seguintes comandos:

```bash
cd "/Users/julia/Desktop/Pagina infos"

# Conectar com seu repositório no GitHub (troque SEU_USUARIO pelo seu username do GitHub):
git remote add origin https://github.com/SEU_USUARIO/links-juliamachado.git
git branch -M main
git push -u origin main
```

*(Se o GitHub solicitar login no terminal, você pode fazer login ou usar o GitHub Desktop caso prefira interface visual).*

---

### Passo 3: Deploy gratuito na Vercel
1. Acesse [vercel.com](https://vercel.com) e faça login com a sua conta do **GitHub**.
2. No painel principal da Vercel, clique no botão **"Add New..."** e escolha **"Project"**.
3. Você verá a lista de repositórios do seu GitHub. Localize o `links-juliamachado` e clique em **"Import"**.
4. Não precisa alterar nenhuma configuração! Apenas clique em **"Deploy"**.
5. Em menos de 30 segundos, a Vercel vai gerar um link oficial rápido e seguro (exemplo: `https://links-juliamachado.vercel.app`), com certificado SSL gratuito (https://).
6. Copie esse link e cole na **bio do seu Instagram** (`@juliasmachad`)! 🎉

> 💡 **Vantagem da integração GitHub + Vercel**: Sempre que você alterar um cupom ou link no arquivo e fizer `git push`, a Vercel atualiza seu site automaticamente na mesma hora!

---

## 🛠️ Personalização dos Cupons e Links

Para editar os cupons ou adicionar novos:
- Abra o arquivo `index.html`.
- Cada parceiro é um bloco `<article class="card coupon-card">`.
- Os códigos de cupom estão dentro do elemento `<span class="coupon-code">CÓDIGO</span>` e no atributo `onclick="copyCoupon('CÓDIGO', this)"`.
