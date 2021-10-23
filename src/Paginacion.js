import React from 'react'

function Paginacion(props) {
    
    
    /* ejemplo 1 */
    const getPaginas = ()=>{
        const resultado=[];
        for (let i = 0; i < props.total; i++) {
            let pagina = i +1;
            resultado.push(
                <a onClick={() => props.onChange(pagina)}
                 className={props.pagina === pagina ? 'active' : ''}>
                    {pagina}
                </a>
            );
        }
        return resultado;
    };
    /* ejemplo 1 */
    return (
        <div className="topbar-filter">
                      <div className="pagination2">
                        <span>Pagina {props.pagina} de {props.total}:</span>

                            {/* ejemplo 2 */}
                            {/* {Array.apply(0,Array(props.total)).map(value => {
                                <a className="active" href="#">1</a>
                            })} */}
                            {/* ejemplo 2 */}


                            {/* ejmplo 1 */}
                           {getPaginas()} 
                            {/* ejmplo 1 */}
                            
                        


                      </div>
        </div>
    )
}

export default Paginacion
