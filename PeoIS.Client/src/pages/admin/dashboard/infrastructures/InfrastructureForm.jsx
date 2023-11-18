import { Tune } from "@material-ui/icons";
import { Autocomplete, Grid, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import React, { useRef } from "react";
import { useValue } from "../../../../context/ContextProvider";

const InfrastructureForm = ({
  handleChange,

  adapterDateFns,
  handleChangeAutoComplete,
}) => {
  const {
    state: {
      infrastructure: {
        id,
        name_of_project,
        location,
        date_of_public_bidding,
        name_of_contractor,
        contrators_authorized_representative,
        position,
        categoryProject,
        date_of_notice_of_award,
        performance_security_posted,
        issuing_entity,
        policy_no,
        amount_performance_posted,
        date_of_effectivity,
        expiration_date,
        credit_line_from_bank,
        amount_credit_line,
        date_credit_line,
        date_of_notiization_of_contract,
        book_no,
        doc_no,
        series_of,
        date_issuance_of_notice_to_proceed,
        notarized,
        issued_by,
        contract_amount,
        revised_contract_amount,
        contract_duration,
        revised_contract_time,
        time_suspension_extension,
        peo_project_engineer,
        contractors_project_engineer,
        materials_engineer,
      },
    },
    dispatch,
  } = useValue();

  const name_of_projectRef = useRef();
  const locationRef = useRef();
  const date_of_public_biddingRef = useRef();
  const name_of_contractorRef = useRef();
  const contrators_authorized_representativeRef = useRef();
  const positionRef = useRef();
  const categoryProjectRef = useRef();
  const date_of_notice_of_awardRef = useRef();
  const performance_security_postedRef = useRef();
  const issuing_entityRef = useRef();
  const policy_noRef = useRef();
  const amount_performance_postedRef = useRef();
  const date_of_effectivityRef = useRef();
  const expiration_dateRef = useRef();
  const credit_line_from_bankRef = useRef();
  const amount_credit_lineRef = useRef();
  const date_credit_lineRef = useRef();
  const date_of_notiization_of_contractRef = useRef();
  const book_noRef = useRef();
  const doc_noRef = useRef();
  const series_ofRef = useRef();
  const date_issuance_of_notice_to_proceedRef = useRef();
  const notarizedRef = useRef();
  const issued_byRef = useRef();
  const contract_amountRef = useRef();
  const revised_contract_amountRef = useRef();
  const contract_durationRef = useRef();
  const revised_contract_timeRef = useRef();
  const time_suspension_extensionRef = useRef();
  const peo_project_engineerRef = useRef();
  const contractors_project_engineerRef = useRef();
  const materials_engineerRef = useRef();

  const textInput = [
    {
      id: "name_of_project",
      label: "Name of Project",
      name: "name_of_project",
      inputRef: name_of_contractorRef,
      value: name_of_project,
      InputProps: {
        readOnly: true,
      },
      md: 8,
    },
    {
      type: "text",
      id: "location",
      label: "Location",
      name: "location",
      onChange: handleChange,
      inputRef: locationRef,
      value: location,
      InputProps: {
        readOnly: true,
      },
      md: 4,
    },
    {
      type: "date",
      id: "date_of_public_bidding",
      label: "Date of Public Bidding",
      name: "date_of_public_bidding",
      InputLabelProps: {
        shrink: true,
      },
      onChange: handleChange,
      inputRef: date_of_public_biddingRef,
      value: date_of_public_bidding,
      md: 12,
    },
    {
      type: "text",
      id: "name_of_contractor",
      label: "Name of Contractor",
      name: "name_of_contractor",
      onChange: handleChange,
      inputRef: name_of_contractorRef,
      value: name_of_contractor,
      md: 4,
    },

    {
      type: "text",
      id: "contrators_authorized_representative",
      label: "Contractors Authorized Representative",
      name: "contrators_authorized_representative",
      onChange: handleChange,
      inputRef: contrators_authorized_representativeRef,
      value: contrators_authorized_representative,
      md: 4,
    },
    {
      type: "text",
      id: "position",
      label: "Position",
      name: "position",
      onChange: handleChange,
      inputRef: positionRef,
      value: position,
      md: 4,
    },
    {
      type: "text",
      id: "categoryProject",
      label: "Category",
      name: "categoryProject",
      onChange: handleChange,
      inputRef: categoryProjectRef,
      value: categoryProject,
      md: 12,
      option: categoryOptions,
    },
    {
      fullWidth: true,
      id: "date_of_notice_of_award",
      label: "Date of Notice Award",
      type: "date",
      InputLabelProps: {
        shrink: true,
      },
      name: "date_of_notice_of_award",
      onChange: handleChange,
      inputRef: date_of_notice_of_awardRef,
      value: date_of_notice_of_award,
      md: 12,
    },
    {
      type: "text",
      id: "performance_security_posted",
      label: "Performance Security Posted",
      name: "performance_security_posted",
      onChange: handleChange,
      inputRef: performance_security_postedRef,
      value: performance_security_posted,
      md: 12,
    },
    {
      type: "text",
      id: "issuing_entity",
      label: "Issuing Enity",
      name: "issuing_entity",
      onChange: handleChange,
      inputRef: issuing_entityRef,
      value: issuing_entity,
      md: 4,
    },
    {
      type: "text",
      id: "policy_no",
      label: "Policy No.",
      name: "policy_no",
      onChange: handleChange,
      inputRef: policy_noRef,
      value: policy_no,
      md: 4,
    },
    {
      type: "text",
      id: "amount_performance_posted",
      label: "Amount Performance Posted",
      name: "amount_performance_posted",
      onChange: handleChange,
      inputRef: amount_performance_postedRef,
      value: amount_performance_posted,
      md: 4,
    },
    {
      type: "date",
      id: "date_of_effectivity",
      label: "Date of Effective",
      name: "date_of_effectivity",
      InputLabelProps: {
        shrink: true,
      },
      onChange: handleChange,
      inputRef: date_of_effectivityRef,
      value: date_of_effectivity,
      md: 6,
    },
    {
      type: "date",
      id: "expiration_date",
      label: "Expiration Date",
      name: "expiration_date",
      InputLabelProps: {
        shrink: true,
      },
      onChange: handleChange,
      inputRef: expiration_dateRef,
      value: expiration_date,
      md: 6,
    },

    {
      type: "text",
      id: "credit_line_from_bank",
      label: "Credit Line from Bank",
      name: "credit_line_from_bank",
      onChange: handleChange,
      inputRef: credit_line_from_bankRef,
      value: credit_line_from_bank,
      md: 4,
    },
    {
      type: "text",
      id: "amount_credit_line",
      label: "Amount Credit Line",
      name: "amount_credit_line",
      onChange: handleChange,
      inputRef: amount_credit_lineRef,
      value: amount_credit_line,
      md: 4,
    },
    {
      type: "date",
      id: "date_credit_line",
      label: "Date Credit Line",
      name: "date_credit_line",
      InputLabelProps: {
        shrink: true,
      },
      onChange: handleChange,
      inputRef: date_credit_lineRef,
      value: date_credit_line,
      md: 4,
    },
    {
      type: "date",
      id: "date_of_notiization_of_contract",
      label: "Date of Notization of Contract",
      name: "date_of_notiization_of_contract",
      InputLabelProps: {
        shrink: true,
      },
      onChange: handleChange,
      inputRef: date_of_notiization_of_contractRef,
      value: date_of_notiization_of_contract,
      md: 6,
    },
    {
      type: "text",
      id: "notarized",
      label: "Notarized by:",
      name: "notarized",
      onChange: handleChange,
      inputRef: notarizedRef,
      value: notarized,
      md: 6,
    },
    {
      type: "text",
      id: "book_no",
      label: "Book No.",
      name: "book_no",
      onChange: handleChange,
      inputRef: book_noRef,
      value: book_no,
      md: 4,
    },
    {
      type: "text",
      id: "doc_no",
      label: "Doc No.",
      name: "doc_no",
      onChange: handleChange,
      inputRef: doc_noRef,
      value: doc_no,
      md: 4,
    },
    {
      type: "text",
      id: "series_of",
      label: "Series of",
      name: "series_of",
      onChange: handleChange,
      inputRef: series_ofRef,
      value: series_of,
      md: 4,
    },
    {
      type: "date",
      id: "date_issuance_of_notice_to_proceed",
      label: "Date Issuance of Notice to Proceed",
      name: "date_issuance_of_notice_to_proceed",
      InputLabelProps: {
        shrink: true,
      },
      onChange: handleChange,
      inputRef: date_issuance_of_notice_to_proceedRef,
      value: date_issuance_of_notice_to_proceed,
    },
    {
      type: "text",
      id: "issued_by",
      label: "Issued by",
      name: "issued_by",
      onChange: handleChange,
      inputRef: issued_byRef,
      value: issued_by,
      md: 8,
    },
    {
      type: "text",
      id: "contract_amount",
      label: "Contract Amount",
      name: "contract_amount",
      onChange: handleChange,
      inputRef: contract_amountRef,
      value: contract_amount,
      md: 6,
    },
    {
      type: "text",
      id: "revised_contract_amount",
      label: "Revised Contract Amount",
      name: "revised_contract_amount",
      onChange: handleChange,
      inputRef: revised_contract_amountRef,
      value: revised_contract_amount,
      md: 6,
    },
    {
      type: "text",
      id: "contract_duration",
      label: "Contract Duration",
      name: "contract_duration",
      onChange: handleChange,
      inputRef: contract_durationRef,
      value: contract_duration,
      md: 6,
    },
    {
      type: "text",
      id: "revised_contract_time",
      label: "Revised Contact Time",
      name: "revised_contract_time",
      onChange: handleChange,
      inputRef: revised_contract_timeRef,
      value: revised_contract_time,
      md: 6,
    },
    {
      type: "text",
      id: "time_suspension_extension",
      label: "Time Suspension Extension",
      name: "time_suspension_extension",
      onChange: handleChange,
      inputRef: time_suspension_extensionRef,
      value: time_suspension_extension,
      md: 12,
    },
    {
      type: "text",
      id: "peo_project_engineer",
      label: "PEO Project Engineer",
      name: "peo_project_engineer",
      onChange: handleChange,
      inputRef: peo_project_engineerRef,
      value: peo_project_engineer,
      md: 12,
    },
    {
      type: "text",
      id: "contractors_project_engineer",
      label: "Contractors Project Engineer",
      name: "contractors_project_engineer",
      onChange: handleChange,
      inputRef: contractors_project_engineerRef,
      value: contractors_project_engineer,
      md: 12,
    },
    {
      type: "text",
      id: "materials_engineer",
      label: "PEO Materials Engineer",
      name: "materials_engineer",
      onChange: handleChange,
      inputRef: materials_engineerRef,
      value: materials_engineer,
      md: 12,
    },
  ];

  return (
    <LocalizationProvider dateAdapter={adapterDateFns}>
      <Grid container spacing={2} justifyContent="center">
        {textInput.map((item) => (
          <Grid item md={item.md ? item.md : 4} key={item.id}>
            {item.option ? (
              <Autocomplete
                options={item.option}
                renderInput={(params) => (
                  <TextField {...params} label={item.label} />
                )}
                value={categoryProject ? categoryProject : null}
                onChange={(e, newValue) =>
                  handleChangeAutoComplete(e, newValue)
                }
                disablePortal
                id={item.id}
                size="small"
              />
            ) : (
              <TextField
                {...item}
                // required
                fullWidth
                type={item.type}
                id={item.id}
                label={item.label}
                name={item.name}
                onChange={item.onChange}
                inputRef={item.inputRef}
                value={item.value}
                InputLabelProps={item.InputLabelProps}
                size="small"
              />
            )}
          </Grid>
        ))}
      </Grid>
    </LocalizationProvider>
  );
};

export default InfrastructureForm;

const categoryOptions = [
  { label: "Roads" },
  { label: "Bridges" },
  { label: "Buildings" },
  { label: "Water and Sanitation" },
  { label: "Flood Control/Drainage" },
  { label: "Wharf/Seaports/Landings" },
  { label: "Plaza/Auditorium,Fence,MP Pavements,etc." },
];
