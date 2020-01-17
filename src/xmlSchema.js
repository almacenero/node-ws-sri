var builder = require("xmlbuilder");

function getXMLSchema() {
  var obj = {
    factura: {
      "@id": "comprobante",
      "@version": "1.0.0",
      infoTributaria: {
        ambiente: 1,
        tipoEmision: 1,
        razonSocial: "Distribuidora de Suministros Nacional S.A.",
        ruc: "1792146739001",
        claveAcceso: "2110201101179214673900110020010000000011234567813",
        codDoc: "01",
        estab: "002",
        ptoEmi: "001",
        secuencial: "000000001",
        dirMatriz: "Enrique Guerrero Portilla OE1-34 AV. Galo Plaza Lasso"
      },
      infoFactura: {
        fechaEmision: "21/10/2012",
        tipoIdentificacionComprador: "04",
        razonSocialComprador: "PRUEBAS SERVICIO DE RENTAS INTERNAS",
        identificacionComprador: "1713328506001",
        totalSinImpuestos: "295000.00",
        totalDescuento: "5005.00",
        totalConImpuestos: {
          totalImpuesto: [
            {
              codigo: 3,
              codigoPorcentaje: 3072,
              baseImponible: "295000.00",
              valor: "14750.00"
            },
            {
              codigo: 2,
              codigoPorcentaje: 2,
              descuentoAdicional: "5.00",
              baseImponible: "309750.00",
              valor: "37169.40"
            },
            {
              codigo: 5,
              codigoPorcentaje: 5001,
              baseImponible: "12000.00",
              valor: "240.00"
            }
          ]
        },
        propina: 0,
        importeTotal: "347159.40",
        pagos: {
          pago: {
            formaPago: "01",
            total: "347159.40"
          }
        }
      },
      detalles: {
        detalle: {
          descripcion: "CAMIONETA 4X4 DIESEL 3.7",
          cantidad: "10.00",
          precioUnitario: "300000.00",
          descuento: "5000.00",
          precioTotalSinImpuesto: "295000.00",
          impuestos: {
            impuesto: [
              {
                codigo: 3,
                codigoPorcentaje: 3072,
                tarifa: 5,
                baseImponible: "295000.00",
                valor: "14750.00"
              },
              {
                codigo: 2,
                codigoPorcentaje: 2,
                tarifa: 12,
                baseImponible: "309750.00",
                valor: "37170.00"
              },
              {
                codigo: 5,
                codigoPorcentaje: 5001,
                tarifa: "0.02",
                baseImponible: "12000.00",
                valor: "240.00"
              }
            ]
          }
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
