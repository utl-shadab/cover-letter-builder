import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";
import { Message } from "ai";
import { FormState, PdfStyle, UserFormState } from "@/lib/store";
import { PdfStyleDefinition } from "@/lib/Types/pdfStyleDefinition";

type PdfDocumentProps = {
  messages: Message[];
  styles: PdfStyleDefinition;
  isLoading: boolean;
  selectedStyle: PdfStyle;
  personalFirstName: FormState["personalFirstName"];
  personalLastName: FormState["personalLastName"];
  personalAddress: UserFormState["personalAddress"];
  personalZip: UserFormState["personalZip"];
  personalCity: UserFormState["personalCity"];
  personalTelephone: UserFormState["personalTelephone"];
  personalEmail: UserFormState["personalEmail"];
  recruiter: FormState["recruiter"];
  companyName: FormState["companyName"];
  street: string;
  city: string;
  currentDate: string;
  letterSubject: UserFormState["letterSubject"];
};

const PdfDocument = ({
  styles,
  selectedStyle,
  personalFirstName,
  personalLastName,
  personalAddress,
  personalZip,
  personalCity,
  personalTelephone,
  personalEmail,
  recruiter,
  companyName,
  street,
  city,
  currentDate,
  letterSubject,
  isLoading,
  messages,
}: PdfDocumentProps) => (
  <Document
    title={`${personalFirstName} ${personalLastName} - ${companyName} Cover Letter`}
    author={`{{${personalFirstName} ${personalLastName}}}`}
    subject={`${letterSubject}`}
    creator="Cover Letter Pro"
    producer="Cover Letter Pro"
  >
    <Page size="A4" style={styles[selectedStyle].page}>
      <View style={styles[selectedStyle].personalHeader}>
        <Text
          style={[
            styles[selectedStyle].text,
            styles[selectedStyle].headerText,
            styles[selectedStyle].headerName,
          ]}
        >
          {personalFirstName} {personalLastName}
        </Text>
        <Text
          style={[styles[selectedStyle].text, styles[selectedStyle].headerText]}
        >
          {personalAddress}
        </Text>
        <Text
          style={[styles[selectedStyle].text, styles[selectedStyle].headerText]}
        >
          {personalZip} {personalCity}
        </Text>
        <Text
          style={[styles[selectedStyle].text, styles[selectedStyle].headerText]}
        >
          {personalTelephone}
        </Text>
        <Text
          style={[styles[selectedStyle].text, styles[selectedStyle].headerText]}
        >
          {personalEmail}
        </Text>
      </View>
      <View style={styles[selectedStyle].companyHeader}>
        <Text
          style={[styles[selectedStyle].text, styles[selectedStyle].headerText]}
        >
          {recruiter}
        </Text>
        <Text
          style={[styles[selectedStyle].text, styles[selectedStyle].headerName]}
        >
          {companyName}
        </Text>
        <Text
          style={[styles[selectedStyle].text, styles[selectedStyle].headerText]}
        >
          {street}
        </Text>
        <Text
          style={[styles[selectedStyle].text, styles[selectedStyle].headerText]}
        >
          {city}
        </Text>
      </View>
      <View style={styles[selectedStyle].dateHeader}>
        <Text style={styles[selectedStyle].text}>
          {personalCity}, {currentDate}
        </Text>
      </View>
      <View style={styles[selectedStyle].subjectHeader}>
        <Text style={styles[selectedStyle].text}>{letterSubject}</Text>
      </View>
      {messages && messages.length > 0 && !isLoading ? (
        <Text
          style={[
            styles[selectedStyle].text,
            styles[selectedStyle].promptSection,
          ]}
        >
          {messages[messages.length - 1].content || "No content available."}
        </Text>
      ) : (
        <View style={styles[selectedStyle].placeholderSection}>
          <Text style={[styles[selectedStyle].text]}>
            Fill up the required form inputs to generate the cover letter body.
          </Text>
        </View>
      )}
    </Page>
  </Document>
);

export default PdfDocument;
