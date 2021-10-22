
// Guardar en el cache dinamico
function actualizCacheDinamico( dynamicCche, req, res ){

  if( res.ok ){
    return caches.open( dynamicCche )
      .then(cache => {

        cache.put( req, res.clone() );

        return res.clone();

      });
  }else {
    return res;
  }

}


