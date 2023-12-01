import { Autocomplete, Grid, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import CustomTextField from "../../../../components/CustomTextField";
import { useValue } from "../../../../context/ContextProvider";

const ProjectForm = ({ handleChangeAutoComplete, handleChange }) => {
  const {
    state: {
      project: {
        id,
        aip_reference_code,
        project_status,
        project_name,
        location,
        barangay,
        province,
        municipality,
        implementing_office,
        starting_date,
        completion_date,
        expected_output,
        funding_source,
        personal_services,
        mooe,
        capital_outlay,
        total,
        cca,
        ccm,
        cc_typology_code,
      },
    },
    dispatch,
  } = useValue();

  const aip_reference_codeRef = useRef();
  const project_statusRef = useRef();
  const project_nameRef = useRef();
  const locationRef = useRef();
  const barangayRef = useRef();
  const provinceRef = useRef();
  const municipalityRef = useRef();
  const implementing_officeRef = useRef();
  const starting_dateRef = useRef();
  const completion_dateRef = useRef();
  const expected_outputRef = useRef();
  const funding_sourceRef = useRef();
  const personal_servicesRef = useRef();
  const mooeRef = useRef();
  const capital_outlayRef = useRef();
  const totalRef = useRef();
  const ccaRef = useRef();
  const ccmRef = useRef();
  const cc_typology_codeRef = useRef();

  return (
    <form>
      <Grid container spacing={1} justifyContent="center">
        <CustomTextField
          required
          fullWidth
          type="text"
          id="aip_reference_code"
          label="AIP Reference Code"
          name="aip_reference_code"
          onChange={handleChange}
          value={aip_reference_code}
          // inputRef={aip_reference_codeRef}
          md={12}
        />

        <CustomTextField
          required
          fullWidth
          type="text"
          id="project_name"
          label="Project Title"
          name="project_name"
          onChange={handleChange}
          // inputRef={project_nameRef}
          value={project_name}
          md={12}
        />

        <CustomTextField
          required
          fullWidth
          type="text"
          id="barangay"
          label="Barangay"
          name="barangay"
          onChange={handleChange}
          // inputRef={barangayRef}
          value={barangay}
          md={4}
        />

        <Grid item md={4}>
          <Autocomplete
            options={municipalityOption}
            renderInput={(params) => (
              <TextField {...params} label="Municipality" />
            )}
            value={municipality ? municipality : null}
            onChange={(e, newValue) => handleChangeAutoComplete(e, newValue)}
            disablePortal
            id="municipality"
            size="small"
          />
        </Grid>

        <CustomTextField
          required
          fullWidth
          type="text"
          id="province"
          label="Province"
          name="province"
          onChange={handleChange}
          // inputRef={provinceRef}
          value={province}
          InputProps={{
            readOnly: true,
          }}
          md={4}
        />
        <CustomTextField
          required
          fullWidth
          type="text"
          id="implementing_office"
          label="Implementing Office"
          name="implementing_office"
          onChange={handleChange}
          // inputRef={implementing_officeRef}
          value={implementing_office}
          md={4}
        />
        <CustomTextField
          required
          fullWidth
          type="text"
          id="expected_output"
          label="Expected Output"
          name="expected_output"
          onChange={handleChange}
          // inputRef={expected_outputRef}
          value={expected_output}
          md={8}
        />

        <Grid item md={4}>
          <Autocomplete
            options={sourceOfFundOption}
            renderInput={(params) => (
              <TextField {...params} label="Source of Fund" />
            )}
            value={funding_source ? funding_source : null}
            onChange={(e, newValue) => handleChangeAutoComplete(e, newValue)}
            disablePortal
            id="funding_source"
            size="small"
          />
        </Grid>

        <CustomTextField
          required
          fullWidth
          type="text"
          id="capital_outlay"
          label="Capital Outlay"
          name="capital_outlay"
          onChange={handleChange}
          // inputRef={capital_outlayRef}
          value={capital_outlay}
          md={4}
        />
        <CustomTextField
          required
          fullWidth
          type="text"
          id="total"
          label="Total"
          name="total"
          onChange={handleChange}
          // inputRef={totalRef}
          value={total}
          md={4}
        />
        <Grid item md={3}>
          <TextField
            fullWidth
            id="starting_date"
            label="Starting Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
            // inputRef={starting_dateRef}
            value={starting_date}
            size="small"
          />
        </Grid>
        <Grid item md={3}>
          <TextField
            fullWidth
            id="completion_date"
            label="Completion Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
            // inputRef={completion_dateRef}
            value={completion_date}
            size="small"
          />
        </Grid>
        <Grid item md={3}>
          <Autocomplete
            options={statusOption}
            renderInput={(params) => <TextField {...params} label="Status" />}
            value={project_status ? project_status : null}
            onChange={(e, newValue) => handleChangeAutoComplete(e, newValue)}
            disablePortal
            id="project_status"
            size="small"
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default ProjectForm;

const statusOption = [{ label: "Funded" }, { label: "Not Funded" }];
const sourceOfFundOption = [
  { label: "20% EDF" },
  { label: "General Fund" },
  { label: "SPA" },
  { label: "Loan-LBP" },
  { label: "CMGP" },
  { label: "PAMANA" },
  { label: "PRDP" },
  { label: "DOH" },
  { label: "DILG-CLIP" },
  { label: "Continuing Appro" },
  { label: "DILG-BUB" },
  { label: "DA-SAAD" },
  { label: "Special Education Fund" },
  { label: "External Sources" },
];
const municipalityOption = [
  { label: "Allen" },
  { label: "Biri" },
  { label: "Bobon" },
  { label: "Capul" },
  { label: "Catarman" },
  { label: "Catubig" },
  { label: "Gamay" },
  { label: "Laoang" },
  { label: "Lapinig" },
  { label: "Las Navas" },
  { label: "Lavezares" },
  { label: "Mapanas" },
  { label: "Mondragon" },
  { label: "Palapag" },
  { label: "Pambujan" },
  { label: "Rosario" },
  { label: "San Antonio" },
  { label: "San Isidro" },
  { label: "San Jose" },
  { label: "San Roque" },
  { label: "San Vicente" },
  { label: "Silvino Lobos" },
  { label: "Victoria" },
];
