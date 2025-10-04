import '../../App.css'

const MeusServicos = () => {
  return (
    <div className="servicos-container-meus">
      <div className="servicos-box-meus">
        {/* ----- Botão de Novo Serviço ----- */}
        <button className="btn-novo-meus">+ Novo Serviço</button>

        {/* ----- Modal de Novo Serviço ----- */}
        <div className="modal-overlay-meus">
          <div className="modal-content-meus">
            <h2>Novo Serviço</h2>
            <input name="nome" placeholder="Nome" />
            <input name="descricao" placeholder="Descrição" />
            <input name="preco" placeholder="Preço" type="number" step="0.01" />
            <input name="cep" placeholder="CEP" />
            <input name="bairro" placeholder="Bairro" disabled />
            <input name="cidade" placeholder="Cidade" disabled />
            <input name="uf" placeholder="UF" disabled />
            <select name="categoria">
              <option value="">Selecione uma categoria</option>
              <option value="categoria1">Categoria 1</option>
              <option value="categoria2">Categoria 2</option>
            </select>
            <input type="file" accept="image/*" />
            <button className="btn-salvar-meus">Publicar</button>
            <button className="fechar-btn-meus">Cancelar</button>
          </div>
        </div>

        {/* ----- Toast ----- */}
        <div className="toast">Mensagem de exemplo</div>

        {/* ----- Lista de Serviços ----- */}
        <h3 style={{ marginTop: "30px" }}>Serviços:</h3>

        <div className="servicos-lista-meus">
          {/* ----- Card de Serviço Exemplo ----- */}
          <div className="servico-card-meus card-flex-meus">
            <div className="card-info-meus">
              <p className="ativo">✅ Ativo</p>
              <p>📍 Cidade, UF • 📚 Categoria</p>
              <p>🕒 01/01/2025 12:00</p>
              <br />
              <h3>Nome do Serviço</h3>
              <p>Descrição do serviço...</p>
              <p><strong>💲 R$ 100,00</strong></p>
              <div className="botoes-abaixo-meus">
                <button className="btn-editar-meus">Editar</button>
                <button className="btn-excluir-meus">Excluir</button>
              </div>
            </div>
            <div className="card-image-meus">
              <img src="imagem-exemplo.jpg" alt="Serviço" />
            </div>
          </div>
        </div>

        {/* ----- Modal de Edição de Serviço ----- */}
        <div className="modal-overlay-meus">
          <div className="modal-content-meus">
            <h2>Editar Serviço</h2>
            <input name="nome" placeholder="Nome" />
            <input name="descricao" placeholder="Descrição" />
            <input name="preco" placeholder="Preço" type="number" />
            <select name="ativo">
              <option value={true}>Ativo</option>
              <option value={false}>Inativo</option>
            </select>
            <button className="btn-salvar-meus">Salvar</button>
            <button className="fechar-btn-meus">Fechar</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MeusServicos;
