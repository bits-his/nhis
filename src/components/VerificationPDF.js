import React from 'react'
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from '@react-pdf/renderer'
import moment from 'moment';
import QRCode from "qrcode";

const styles = StyleSheet.create({
  page: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    height: 300 ,
    backgroundColor: '#e6e6e6',
    // color: '#fff'
  },
})

// Create Document Component
export const VerificationPDF = ({ data = [], id }) => {
  const principal = data.filter(a => a.EntityType === 'PRINCIPAL')
  let principalObj = principal.length ? principal[0] : {}
  const spouse = data.filter(a => a.EntityType === 'SPOUSE')
  const children = data.filter(a => a.EntityType.includes('CHILD'))


  // const principalDOB = principalObj.DOBString.moment('DD MM YYYY')
  // console.log(principalDOB)
  const qrCodeOptions = {
    width: 100,                 // Width of the QR code (in pixels)
    margin: 4,                  // Margin around the QR code (in modules)
    errorCorrectionLevel: 'L',  // Error correction level: L, M, Q, H
    version: 5,                 // QR code version (1 to 40, or auto)
    maskPattern: 6,             // Mask pattern (0 to 7, or auto)
    color: {
      dark: '#000000FF',        // Color of dark modules
      light: '#FFFFFFFF',       // Color of light modules
    }
  };

  const canvas = document.createElement("canvas");
  QRCode.toCanvas(canvas, `https://nhis-enrolee.netlify.app/view-principal?id=${id}`);
  const qr = canvas.toDataURL(`https://nhis-enrolee.netlify.app/view-principal?id=${id}`, qrCodeOptions);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={{backgroundColor: '#fff'}}>
          <View style={{ display: "flex", flexDirection: "row" ,borderBottom: "1px solid black", marginTop: 10 }}>
            <View style={{ width: "100%", margin: "auto", alignItems: 'center' }}>
              <Image
                src={require("../images/logo.jpeg")}
                style={{ width: 100 }}
              />
            </View>
            <View style={{ width: "100%", margin: "auto", alignItems: 'center' }}>
              <Image
                src={require("../images/logo.jpeg")}
                style={{ width: 100 }}
              />
            </View>
          </View>
          <View style={{display: 'flex', flexDirection: "row", marginRight: 30}}>
            <View style={{marginTop: 0, width: "40%", marginLeft: 30}}> 
              <Text style={{marginBottom: 10, marginTop: 20, fontWeight: "bold" }}>
                {``} Full Name:
              </Text>
              <Text style={{ marginBottom: 10, fontWeight: "bold" }}>
                {``} Healt ID Number:
              </Text>
              <Text style={{marginBottom: 10, fontWeight: "bold" }}>
                {``} PHR Address:
              </Text>
              <Text style={{marginBottom: 10, fontWeight: "bold" }}>
                {``} Date Of Birth:
              </Text>
              <Text style={{marginBottom: 10, fontWeight: "bold" }}>
                {``} Gender:
              </Text>
              <Text style={{marginBottom: 10, fontWeight: "bold" }}>
                {``} Mobile:
              </Text>
            </View>
            <View style={{marginTop: 0, width: "40%", marginLeft: 30}}>
              <Text style={{marginBottom: 10, marginTop: 20, fontWeight: "bold" }}>
                {``} John Deo
              </Text>
              <Text style={{marginBottom: 10, fontWeight: "bold" }}>
                {``} xx-xxxx-xxxx-xxxx
              </Text>
              <Text style={{marginBottom: 10, fontWeight: "bold" }}>
                {``} Johndoe@ndhm
              </Text>
              <Text style={{marginBottom: 10, fontWeight: "bold" }}>
                {``} 1/12/1992
              </Text>
              <Text style={{marginBottom: 10, fontWeight: "bold" }}>
                {``} Male
              </Text>
              <Text style={{marginBottom: 10, fontWeight: "bold" }}>
                {``} xxxxxxxxxxx
              </Text>
            </View>
            <View style={{ width: "20%", marginTop: 50 }}>
              <View style={{border: '1px solid black' }}>
                <Image src={qr} style={{ width: 100, height: 100, marginRight: 50 }} />
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
