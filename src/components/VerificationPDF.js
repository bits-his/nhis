import React from 'react'
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from '@react-pdf/renderer'
import logo from '../images/logo.PNG'
// Create styles
const styles = StyleSheet.create({
  page: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
})

// Create Document Component
export const VerificationPDF = ({ data=[] }) => (
  <Document>
    {data.map((item, index) => (

      <Page size="A4" style={styles.page}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View style={{ width: '25%' }}>
            <Image src={logo} style={{ width: 100 }} />
          </View>
          <View style={{ width: '75%', textAlign: 'center', fontSize: 14 }}>
            <Text style={{ textTransform: 'uppercase', marginTop: 10 }}>
              National Health Insurance Scheme Enrollee Status
            </Text>
            <Text style={{ textTransform: 'uppercase' }}>Verification Form</Text>
          </View>
        </View>
        <View style={{ fontSize: 10, marginTop: 10 }}>
          <Text>NHIS #:{item.type}</Text>
        </View>
        <View>
          <View style={{ borderBottom: '1px solid black', marginTop: 10 }}>
            <Text style={{ fontSize: 10, fontStyle: 'italic' }}>
              PRINCIPAL MEMBER DETAILS
            </Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', fontSize: 10 }}>
            <View style={{ width: '50%', marginTop: 10 }}>
              <Text style={{ marginBottom: 10 }}>Last Name:</Text>
              <Text style={{ marginBottom: 10 }}>First Name:</Text>
              <Text style={{ marginBottom: 10 }}>Middle Name:</Text>
              <Text style={{ marginBottom: 10 }}>Employee Number:</Text>
              <Text style={{ marginBottom: 10 }}>State of Posting:</Text>
              <Text style={{ marginBottom: 10 }}>National Id:</Text>
            </View>
            <View style={{ width: '50%', marginTop: 10 }}>
              <Text style={{ marginBottom: 10 }}>Sex:</Text>
              <Text style={{ marginBottom: 10 }}>Marital Status:</Text>
              <Text style={{ color: 'white', marginBottom: 10 }}>dfasfas</Text>
              <Text style={{ marginBottom: 10 }}>Date of Birth:</Text>
              <Text style={{ marginBottom: 10 }}>Telephone:</Text>
              <Text style={{ marginBottom: 10 }}>Email Address:</Text>
            </View>
          </View>
        </View>

        <View>
          <View style={{ borderBottom: '1px solid black', marginTop: 10 }}>
            <Text style={{ fontSize: 10 }}>EMPLOYMENT DETAILS</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', fontSize: 10 }}>
            <View style={{ width: '50%', marginTop: 10 }}>
              <Text style={{ marginBottom: 10 }}>Employer:</Text>
              <Text style={{ marginBottom: 10 }}>Address:</Text>
            </View>
            <View style={{ width: '50%' }}>
              <Text style={{ marginBottom: 10, marginTop: 10 }}>Branch:</Text>
            </View>
          </View>
        </View>

        <View style={{ fontSize: 10 }}>
          <View style={{ borderBottom: '1px solid black', marginTop: 10 }}>
            <Text style={{ fontSize: 10 }}>HEALTHCARE OPTIONS</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <View style={{ width: '50%' }}>
              <Text style={{ marginBottom: 10, marginTop: 10 }}>HMO:</Text>
              <Text style={{ marginBottom: 10 }}>HCP:</Text>
            </View>
            <View style={{ width: '50%' }}>
              <Text style={{ color: 'white' }}>dfasfas</Text>
              <Text style={{ marginBottom: 10 }}>Alternate HCP:</Text>
            </View>
          </View>
        </View>

        <View style={{ fontSize: 10 }}>
          <View style={{ borderBottom: '1px solid black', marginTop: 10 }}>
            <Text style={{ fontSize: 10 }}>SPOUSE</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <View style={{ width: '50%' }}>
              <Text style={{ marginBottom: 10, marginTop: 10 }}>Last Name:</Text>
              <Text style={{ marginBottom: 10 }}>First Name:</Text>
              <Text style={{ marginBottom: 10 }}>Date of Birth:</Text>
            </View>
            <View style={{ width: '50%' }}>
              <Text style={{ marginBottom: 10, marginTop: 10 }}>Sex:</Text>
            </View>
          </View>
        </View>

        <View style={{ fontSize: 10 }}>
          <View style={{ borderBottom: '1px solid black', marginTop: 10 }}>
            <Text style={{ fontSize: 10 }}>CHILDREN</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              borderBottom: '1px solid grey',
            }}
          >
            <View style={{ width: '20%' }}>
              <Text style={{ marginTop: 5 }}>FIRST NAME</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text style={{ marginTop: 5 }}>LAST NAME</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text style={{ marginTop: 5 }}>GENDER</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text style={{ marginTop: 5 }}>DATE OF BIRTH</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text style={{ marginTop: 5 }}>ALT HCP</Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <View style={{ width: '20%' }}>
              <Text style={{ marginTop: 5 }}>fafasfsdfsa</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text style={{ marginTop: 5 }}>fafasfsdfsa</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text style={{ marginTop: 5 }}>fafasfsdfsa</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text style={{ marginTop: 5 }}>fafasfsdfsa</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text style={{ marginTop: 5 }}>fafasfsdfsa</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={{ borderBottom: '1px solid black', marginTop: 10 }}>
            <Text style={{ fontSize: 10 }}>EXTRA DEPENDENTS</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              borderBottom: '1px solid grey',
              fontSize: 10,
            }}
          >
            <View style={{ width: '20%' }}>
              <Text style={{ marginTop: 5 }}>FIRST NAME</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text style={{ marginTop: 5 }}>LAST NAME</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text style={{ marginTop: 5 }}>GENDER</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text style={{ marginTop: 5 }}>DATE OF BIRTH</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text style={{ marginTop: 5 }}>ALT HCP</Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              fontSize: 10,
            }}
          >
            <View style={{ width: '20%' }}>
              <Text style={{ marginTop: 5 }}>fafasfsdfsa</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text style={{ marginTop: 5 }}>fafasfsdfsa</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text style={{ marginTop: 5 }}>fafasfsdfsa</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text style={{ marginTop: 5 }}>fafasfsdfsa</Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text style={{ marginTop: 5 }}>fafasfsdfsa</Text>
            </View>
          </View>
        </View>

        <View style={{ fontSize: 10, marginTop: 50 }}>
          <Text>
            This is to certify that the above named enrolee is currently on the
            NHIS enrolee register and has chosen
          </Text>

          <Text>
            your facility for primary healthcare services. Kindly attend to
            hime/her.
          </Text>
          <Text style={{ marginTop: 20 }}>Verified by</Text>

          <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
            <View style={{ width: '50%' }}>
              <Text>Name:___________________________________</Text>
            </View>
            <View style={{ width: '50%' }}>
              <Text>Signature & Date:______________________________</Text>
            </View>
          </View>
        </View>
      </Page>

    ))}
  </Document>
)
