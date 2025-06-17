var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_comunas_seleccionadas_1 = new ol.format.GeoJSON();
var features_comunas_seleccionadas_1 = format_comunas_seleccionadas_1.readFeatures(json_comunas_seleccionadas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_comunas_seleccionadas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_comunas_seleccionadas_1.addFeatures(features_comunas_seleccionadas_1);
var lyr_comunas_seleccionadas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_comunas_seleccionadas_1, 
                style: style_comunas_seleccionadas_1,
                popuplayertitle: 'comunas_seleccionadas ',
                interactive: true,
                title: '<img src="styles/legend/comunas_seleccionadas_1.png" /> comunas_seleccionadas '
            });
var format_Indicadores_barrios_AMC_2 = new ol.format.GeoJSON();
var features_Indicadores_barrios_AMC_2 = format_Indicadores_barrios_AMC_2.readFeatures(json_Indicadores_barrios_AMC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indicadores_barrios_AMC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indicadores_barrios_AMC_2.addFeatures(features_Indicadores_barrios_AMC_2);
var lyr_Indicadores_barrios_AMC_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Indicadores_barrios_AMC_2, 
                style: style_Indicadores_barrios_AMC_2,
                popuplayertitle: 'Indicadores_barrios_AMC',
                interactive: true,
                title: '<img src="styles/legend/Indicadores_barrios_AMC_2.png" /> Indicadores_barrios_AMC'
            });
var format_Atractivo_turistico_punto_3 = new ol.format.GeoJSON();
var features_Atractivo_turistico_punto_3 = format_Atractivo_turistico_punto_3.readFeatures(json_Atractivo_turistico_punto_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Atractivo_turistico_punto_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Atractivo_turistico_punto_3.addFeatures(features_Atractivo_turistico_punto_3);
cluster_Atractivo_turistico_punto_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Atractivo_turistico_punto_3
});
var lyr_Atractivo_turistico_punto_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Atractivo_turistico_punto_3, 
                style: style_Atractivo_turistico_punto_3,
                popuplayertitle: 'Atractivo_turistico_punto',
                interactive: true,
                title: '<img src="styles/legend/Atractivo_turistico_punto_3.png" /> Atractivo_turistico_punto'
            });
var format_Atractivo_turistico_poligono_4 = new ol.format.GeoJSON();
var features_Atractivo_turistico_poligono_4 = format_Atractivo_turistico_poligono_4.readFeatures(json_Atractivo_turistico_poligono_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Atractivo_turistico_poligono_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Atractivo_turistico_poligono_4.addFeatures(features_Atractivo_turistico_poligono_4);
var lyr_Atractivo_turistico_poligono_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Atractivo_turistico_poligono_4, 
                style: style_Atractivo_turistico_poligono_4,
                popuplayertitle: 'Atractivo_turistico_poligono',
                interactive: true,
                title: '<img src="styles/legend/Atractivo_turistico_poligono_4.png" /> Atractivo_turistico_poligono'
            });
var format_Atractivo_turistico_linea_5 = new ol.format.GeoJSON();
var features_Atractivo_turistico_linea_5 = format_Atractivo_turistico_linea_5.readFeatures(json_Atractivo_turistico_linea_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Atractivo_turistico_linea_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Atractivo_turistico_linea_5.addFeatures(features_Atractivo_turistico_linea_5);
var lyr_Atractivo_turistico_linea_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Atractivo_turistico_linea_5, 
                style: style_Atractivo_turistico_linea_5,
                popuplayertitle: 'Atractivo_turistico_linea',
                interactive: true,
                title: '<img src="styles/legend/Atractivo_turistico_linea_5.png" /> Atractivo_turistico_linea'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_comunas_seleccionadas_1.setVisible(true);lyr_Indicadores_barrios_AMC_2.setVisible(true);lyr_Atractivo_turistico_punto_3.setVisible(true);lyr_Atractivo_turistico_poligono_4.setVisible(true);lyr_Atractivo_turistico_linea_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_comunas_seleccionadas_1,lyr_Indicadores_barrios_AMC_2,lyr_Atractivo_turistico_punto_3,lyr_Atractivo_turistico_poligono_4,lyr_Atractivo_turistico_linea_5];
lyr_comunas_seleccionadas_1.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_Indicadores_barrios_AMC_2.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Area': 'Area', 'hab_m2': 'hab_m2', 'Sum_Poblac': 'Sum_Poblac', 'av_hab': 'av_hab', 'Long_tLic': 'Long_tLic', 'Long_tNLic': 'Long_tNLic', 'Suma_Trans': 'Suma_Trans', 'porc_cober': 'porc_cober', 'Distance': 'Distance', 'LongcicloK': 'LongcicloK', 'Long_rvial': 'Long_rvial', });
lyr_Atractivo_turistico_punto_3.set('fieldAliases', {'Lugar': 'Lugar', 'Tipo': 'Tipo', 'Categoria': 'Categoria', 'Video': 'Video', });
lyr_Atractivo_turistico_poligono_4.set('fieldAliases', {'Lugar': 'Lugar', 'Tipo': 'Tipo', 'Video': 'Video', 'Categoria': 'Categoria', });
lyr_Atractivo_turistico_linea_5.set('fieldAliases', {'Lugar': 'Lugar', 'Tipo': 'Tipo', 'Video': 'Video', 'Categoria': 'Categoria', });
lyr_comunas_seleccionadas_1.set('fieldImages', {'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', });
lyr_Indicadores_barrios_AMC_2.set('fieldImages', {'Id': 'Range', 'Nombre': 'TextEdit', 'Area': 'TextEdit', 'hab_m2': 'TextEdit', 'Sum_Poblac': 'Range', 'av_hab': 'TextEdit', 'Long_tLic': 'TextEdit', 'Long_tNLic': 'TextEdit', 'Suma_Trans': 'TextEdit', 'porc_cober': 'TextEdit', 'Distance': 'TextEdit', 'LongcicloK': 'TextEdit', 'Long_rvial': 'TextEdit', });
lyr_Atractivo_turistico_punto_3.set('fieldImages', {'Lugar': 'TextEdit', 'Tipo': 'TextEdit', 'Categoria': 'TextEdit', 'Video': 'TextEdit', });
lyr_Atractivo_turistico_poligono_4.set('fieldImages', {'Lugar': 'TextEdit', 'Tipo': 'TextEdit', 'Video': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_Atractivo_turistico_linea_5.set('fieldImages', {'Lugar': 'TextEdit', 'Tipo': 'TextEdit', 'Video': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_comunas_seleccionadas_1.set('fieldLabels', {'CUT_REG': 'hidden field', 'CUT_PROV': 'hidden field', 'CUT_COM': 'hidden field', 'REGION': 'inline label - always visible', 'PROVINCIA': 'inline label - always visible', 'COMUNA': 'inline label - always visible', 'SUPERFICIE': 'hidden field', });
lyr_Indicadores_barrios_AMC_2.set('fieldLabels', {'Id': 'hidden field', 'Nombre': 'inline label - always visible', 'Area': 'hidden field', 'hab_m2': 'hidden field', 'Sum_Poblac': 'hidden field', 'av_hab': 'hidden field', 'Long_tLic': 'hidden field', 'Long_tNLic': 'hidden field', 'Suma_Trans': 'hidden field', 'porc_cober': 'hidden field', 'Distance': 'hidden field', 'LongcicloK': 'hidden field', 'Long_rvial': 'hidden field', });
lyr_Atractivo_turistico_punto_3.set('fieldLabels', {'Lugar': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Categoria': 'inline label - always visible', 'Video': 'inline label - always visible', });
lyr_Atractivo_turistico_poligono_4.set('fieldLabels', {'Lugar': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Video': 'inline label - always visible', 'Categoria': 'inline label - always visible', });
lyr_Atractivo_turistico_linea_5.set('fieldLabels', {'Lugar': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Video': 'inline label - always visible', 'Categoria': 'inline label - always visible', });
lyr_Atractivo_turistico_linea_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});