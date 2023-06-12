import { Document, Image, Page, View, Text } from '@react-pdf/renderer'


export const DocuPdf = () => {
    return (
        <Document>
            <Page size='A4'>

                <View>
                   
                    <Image 
                    src="https://i.postimg.cc/26XJSkzb/Certificado-Noxicode.png" 
                    style={{height:"840"}}
                    />
                    
                </View>
            </Page>
        </Document>
    )
}
