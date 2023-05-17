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
export const VerificationPDF = ({ data = [] }) => {
  const principal = data.filter(a => a.EntityType === 'PRINCIPAL')
  let principalObj = principal.length ? principal[0] : {}
  const spouse = data.filter(a => a.EntityType === 'SPOUSE')
  const children = data.filter(a => a.EntityType.includes('CHILD'))
  return (
    <Document>


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
          <Text>NHIS #:{principalObj.EMPID}</Text>
        </View>
        <View>
          <View style={{ borderBottom: '1px solid black', marginTop: 10 }}>
            <Text style={{ fontSize: 10, fontStyle: 'italic' }}>
              PRINCIPAL MEMBER DETAILS
            </Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', fontSize: 10 }}>
            <View style={{ width: '50%', marginTop: 10 }}>
              <Text style={{ marginBottom: 10 }}>Last Name:{principalObj.Surname}</Text>
              <Text style={{ marginBottom: 10 }}>First Name: {principalObj.Firstname}</Text>
              <Text style={{ marginBottom: 10 }}>Middle Name:</Text>
              <Text style={{ marginBottom: 10 }}>Employee Number: {principalObj.EMPID}</Text>
              <Text style={{ marginBottom: 10 }}>State of Posting:</Text>
              <Text style={{ marginBottom: 10 }}>National Id:</Text>
            </View>
            <View style={{ width: '50%', marginTop: 10 }}>
              <Text style={{ marginBottom: 10 }}>Sex: {principalObj.Gender}</Text>
              <Text style={{ marginBottom: 10 }}>Marital Status:</Text>
              <Text style={{ color: 'white', marginBottom: 10 }}>dfasfas</Text>
              <Text style={{ marginBottom: 10 }}>Date of Birth: {principalObj.DOBString}</Text>
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
              <Text style={{ marginBottom: 10 }}>Employer: {principalObj.Employer}</Text>
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
              <Text style={{ marginBottom: 10, marginTop: 10 }}>HMO:{principalObj.HMO_ID}</Text>
              <Text style={{ marginBottom: 10 }}>HCP: {principalObj.HCPCode}</Text>
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
            {spouse.map((s) =>
              <>
                <View style={{ width: '50%' }}>
                  <Text style={{ marginBottom: 10, marginTop: 10 }}>Last Name: {s.Surname}</Text>
                  <Text style={{ marginBottom: 10 }}>First Name: {s.Firstname}</Text>
                  <Text style={{ marginBottom: 10 }}>Date of Birth: {s.DOBString}</Text>
                </View>
                <View style={{ width: '50%' }}>
                  <Text style={{ marginBottom: 10, marginTop: 10 }}>Sex: {s.Gender}</Text>
                </View>
              </>
            )}
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
          {children.map((c) =>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <View style={{ width: '20%' }}>
                <Text style={{ marginTop: 2, fontSize: 8 }}>{c.Firstname}</Text>
              </View>
              <View style={{ width: '20%' }}>
                <Text style={{ marginTop: 2, fontSize: 8 }}>{c.Surname}</Text>
              </View>
              <View style={{ width: '20%' }}>
                <Text style={{ marginTop: 2, fontSize: 8 }}>{c.Gender}</Text>
              </View>
              <View style={{ width: '20%' }}>
                <Text style={{ marginTop: 2, fontSize: 8 }}>{c.DOBString}</Text>
              </View>
              <View style={{ width: '20%' }}>
                <Text style={{ marginTop: 2, fontSize: 8 }}>{c.HCPName}</Text>
              </View>
            </View>
          )}

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
              <Text style={{ marginTop: 5 }}></Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text style={{ marginTop: 5 }}></Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text style={{ marginTop: 5 }}></Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text style={{ marginTop: 5 }}></Text>
            </View>
            <View style={{ width: '20%' }}>
              <Text style={{ marginTop: 5 }}></Text>
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

    </Document>
  )
}
