<!-- Funcionalidade basica de um accordion em HTML-->
<html lang = "en">
    <head>
    <title>Teste Acordion</title>
    <script src = "https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src = "https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
    <script>
        $(function()
        {
            $("#accordion").accordion({
                collapsible: true //adicionando isso, é possivel ter nenhuma seção aberta
            });
        });
    </script>
    </head>

    <body>
        <div id = "accordion">
            <h3>Selection 1</h3>
            <div>
                <p>
                    Sou a primeira caixa do acordion
                </p>
            </div>
            <h3>Selection 2</h3>
            <div>
                <p>
                    Sou a segunda caixa do acordion
                </p>
            </div>
            <h3>Selection 3</h3>
            <div>
                <p>
                    Sou a ultima caixa do acordion
                </p>
                <ul>
                    Tenho 3 caixas:
                    <li>Caixa 1 (sou um item de uma lista!)</li>
                    <li>Caixa 2 (sou outro item de uma lista!)</li>
                    <li>Caixa 3 (sou mais um item de uma lista!)</li>
                </ul>
            </div>

        </div>        
    </body>
</html>