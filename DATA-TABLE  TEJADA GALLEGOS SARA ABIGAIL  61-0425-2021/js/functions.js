var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

function verReceta( id){
    let info = [
    { 'receta': `  <div>
                        <h3 style="color:rgb(143, 124, 17)">Pollo con verduras</h3>
                        <div class="text-center">
                            <img src="imagen/polloxd.jpg" alt="" width="300" height="300" >
                        
                        </div>
                        <div class="text-left"><br>
                            <strong>INGREDIENTES:</strong> <br>
                            1. 24 placas de lasaña (si son precocidas, solo tendrás que ponerlas en remojo).<br>
                            2. 1 cebolla grande. <br>
                            3. 1 calabacín.<br>
                            4. 1 berenjena.<br>
                            5. 2 zanahorias.<br>
                            6. 200 gr de brócoli.<br>
                            7. 200 ml de salsa de tomate.<br>
                            8. Queso para rallar, tipo emmental o mozzarella.<br>
                            9. Orégano.<br>
                            10. Aceite y sal.<br>
                            11. Para la salsa bechamel<br>
                            12. 1/2 litro de leche (el equivalente a un poco más de dos vasos de leche).
                            13. 2 cucharadas de harina.
                            14. 3 cucharadas de mantequilla.
                            15. Sal.
                            16. Especias al gusto (nuez moscada, pimienta, orégano…).



                        </div>
                        <div>
                            <br>
                            <strong>Como hacer pollo con verduras:</strong> <br>
                            <p style="color:black; font-size: 14px">
                                1. Vamos a preparar la bechamel, y para ello seguimos esta receta que explica cómo hacer bechamel casera y 
                                que aquí está resumida En un cazo a fuego suave, añade las dos cucharadas de mantequilla, y cuando la 
                                mantequilla se deshaga y se quede líquida, incorpora las cucharadas de harina y revuélvelo todo muy bien,
                                 para que se forme una pasta homogénea y no queden grumos de harina.
                                 A continuación, añade un poco de leche (medio vaso) y sigue mezclando bien. Cuando se haya integrado todo, añade el resto de la leche y no dejes de remover con unas varillas o una cuchara, para que no se te pegue en el fondo. Añade sal al gusto, y también especias, por ejemplo pimienta negra molida y orégano.
Cuando la salsa esté cremosa y con la textura adecuada, apártala del fuego y resérvala. Si en el momento de añadirla a la lasaña está un poco espesa, añade un chorrito de leche y remueve bien.
                            </P>
                        
                            <p style="color:black; font-size: 14px">
                                2. Si tus placas de lasaña son precocinadas, ponlas a remojo sumergiéndolas en un recipiente con agua, normalmente durante 10-15 minutos (te lo indicará el paquete). Remuévelas cada poco tiempo para evitar que se peguen. Si no son precocinadas, sigue las instrucciones del paquete para cocerlas.
                            </p>
                        
                            <p style="color:black; font-size: 14px">
                                3. Pela la cebolla y córtala pequeñita. Lava la berenjena, el calabacín y las zanahorias, y pártelas en cubitos pequeños. Lava el brécol, déjalo escurrir y pártelo en pequeños ramilletes.
                            </p>
                        
                            <p style="color:black; font-size: 14px">
                                4. Saltea cada verdura, de una en una, en la sartén a fuego medio, con un poquito de aceite y sal. Estarán listas cada una cuando empiecen a dorarse. Reserva.
                            </p>
                        </div>
                    </div>`, 
        'id': 0}, 
    { 'receta': `<div>
                    <h2 style="color:rgb(143, 124, 17)">Pupusas	</h2>
                    <div class="text-center">
                        <img src="imagen/pupusas.jpg" alt="" width="300" height="300" >
                    
                    </div><br>
                    <div class="text-left">
                        1.<strong>INGREDIENTES:</strong> <br>
                        2.1.1 kilo de harina de maíz<br>
                        3.500 gramos de queso mozzarella<br>
                        4.3 tazas de agua<br>
                        5.1/2 kilos de chicharrón<br>
                    </div>
                    <div>
                        <br>
                        <strong>Como hacer tacos:</strong> <br>
                        <p style="color:black; font-size: 14px">
                            1. Mezclar la harina de maíz, con agua hasta formar la masa.
                        </P>
                        
                        <p style="color:black; font-size: 14px">
                            2. Preparar el quesillo o queso mozarella hasta que no queden grumos.
                        </p>
                        
                        <p style="color:black; font-size: 14px">
                            3. Hacer una tortilla, colocar en el centro el quesillo o queso mozarella, palmearlo hasta formar una tortilla mediana.
                        </p>
                        
                        <p style="color:black; font-size: 14px">
                            4. Es opcional si quieres utilizar el chicharrón, frijoles molidos con el quesillo al centro de la tortilla.
                        </p>
                       
                        <p style="color:black; font-size: 14px">
                            5. Colocarlas en una plancha cocinar hasta que este cocida y salga el queso de la tortilla.  
                        </p>
                    </div>
                </div>
                `, 
        'id': 1},
        {
            'receta': `   <div>
                            <h2 style="color:rgb(143, 124, 17)">Lasaña de carne	</h2>
                            <div class="text-center">
                                <img src="imagen/lasañaxd.jpg" alt="" width="300" height="300" >
                            
                            </div><br>
                            <div class="text-left">
                                <strong>INGREDIENTES:</strong> <br>
                                • 3 1/2 libras de carne de res molida <br>
                                • 2 cucharaditas de ajo en polvo Ajo en polvo <br>
                                • 2 cucharadas de Caldo de Carne de Res MAGGI® <br>
                                • 1 cucharada de aceite vegetal <br>
                                • 1/3 taza de cebolla cortada finamente <br>
                                • 3 dientes de ajo cortados finamente <br>
                                • 1/2 taza de apio cortado finamente <br>
                                • 1 sobre de Salsa De Tomate Bolognesa MAGGI®  <br>
                                • 3/4 taza de agua <br>
                                • 4 hojas de laurel <br>
                                • 3/4 libra de pasta para lasaña cocida Pasta de lasaña precocida <br>
                                • 2 tazas de queso mozzarella rallado <br>
                                • Sal y pimienta al gusto <br>
                                • 1 taza de queso parmesano <br>
                                
                            </div>
                            <div>
                                <br>
                                <strong>Como hacer Lasaña:</strong> <br>
                                <p style="color:black; font-size: 14px">
                                    1. En un tazón, colocar la carne, el ajo en polvo, el Caldo de Carne de Res MAGGI® 2, la pimienta molida y marinar por 5 minutos.
                                </P>
                                
                                <p style="color:black; font-size: 14px">
                                    2. En una cacerola grande, colocar el aceite, la cebolla, el ajo, el apio y sofreír por 2 minutos
                                </p>
                                
                                <p style="color:black; font-size: 14px">
                                    3. Añadir la carne y cocinar por 10 minutos revolviendo constantemente.
                                    Cuando la carne adquiera una tonalidad gris clara, añadir la Salsa de Tomate MAGGI® estilo Boloñesa, el agua, las hojas de laurel, la sal y pimienta y cocinar a fuego medio por 15 minutos.
                                </p>
                                
                                <p style="color:black; font-size: 14px">
                                    4. Armado de la lasaña: Al momento de montar la lasaña, untar con un poco de aceite un recipiente refractario o la bandeja que utilice. Colocar una pequeña cantidad de salsa, cubrir el fondo de la bandeja con lascas de pasta precocida, verter una cantidad pequeña de carne, añadir el queso mozzarella y una mínima parte de queso parmesano.
                                </p>
                            
                                <p style="color:black; font-size: 14px">
                                    5. Repetir este procedimiento hasta rellenar el recipiente. Finalmente, colocar una capa de pasta precocida, la salsa que haya quedado y cubrir con los quesos. La lasaña tiene que tener una buena cantidad de líquido para que la pasta se cocine. Si está muy seca, se le puede agregar caldo de pollo.
                                </p>

                                <p style="color:black; font-size: 14px">
                                    6. Taparla con papel aluminio y llevar al horno a 150°C por 40 minutos.
                                </p>
                            </div>
                        </div>`,
            'id': 2
        }
    ];

   //alert(info[id].receta);
   document.getElementById("diverror").innerHTML=info[id].receta;
   modal.style.display = "block";
    
    

    
}

window.onclick = function(event) {
         if (event.target == modal) {
              modal.style.display = "none";
         }
}


span.onclick = function() {
modal.style.display = "none";
}

