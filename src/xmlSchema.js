var builder = require("xmlbuilder");

function getXMLSchema() {
  var obj = {
    factura: {
      "@id": "comprobante",
      "@version": "1.0.0",
      infoTributaria: {
        ambiente: {
          "#text": 1
        },
        tipoEmision: {
          "#text": 1
        },
        razonSocial: {
          "#text": "Distribuidora de Suministros Nacional S.A."
        },
        ruc: {
          "#text": "1792146739001"
        },
        claveAcceso: {
          "#text": "2110201101179214673900110020010000000011234567813"
        },
        codDoc: {
          "#text": "01"
        },
        estab: {
          "#text": "002"
        },
        ptoEmi: {
          "#text": "001"
        },
        secuencial: {
          "#text": "000000001"
        },
        dirMatriz: {
          "#text": "Enrique Guerrero Portilla OE1-34 AV. Galo Plaza Lasso"
        }
      },
      infoFactura: {
        fechaEmision: {
          "#text": "21/10/2012"
        },
        tipoIdentificacionComprador: {
          "#text": "04"
        },
        razonSocialComprador: {
          "#text": "PRUEBAS SERVICIO DE RENTAS INTERNAS"
        },
        identificacionComprador: {
          "#text": "1713328506001"
        },
        totalSinImpuestos: {
          "#text": "295000.00"
        },
        totalDescuento: {
          "#text": "5005.00"
        }
      }
    }
  };

  var xml2 = builder
    .create(obj)
    .dec("1.0", "UTF-8")
    .end({ pretty: true });

  console.log(xml2);

  return xml2;
}

module.exports = {
  getXMLSchema
};
