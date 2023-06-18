import { Document, Image, Page, View, Text } from '@react-pdf/renderer'


export const DocuPdf = () => {
    return (
        <Document>
            <Page size='A4'>

                <View>
                   
                    <Image 
                    src="https://i.postimg.cc/wjyghXKg/Screenshot-2023-06-17-204352.png" 
                    
                    />
                    
                </View>
            </Page>
        </Document>
    )
}
