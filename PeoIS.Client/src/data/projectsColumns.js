export const projectsColumns = [
  { accessorKey: "id", header: "ID", hide: true },
  {
    accessorKey: "aip_reference_code",
    header: "AIP",
    size: 180,
  },

  {
    accessorFn: (row) =>
      `${row.project_name}, Brgy. ${row.barangay} , N. Samar`,
    header: "PROJECT NAME",
    size: 300,
  },
  {
    accessorKey: "implementing_office",
    header: "IMPLEMENTING OFFICE",
    size: 175,
    hide: true,
  },
  {
    accessorKey: "starting_date",
    header: "Starting Date",
    size: 100,
    hide: true,
  },
  {
    accessorKey: "completion_date",
    header: "Completion Date",
    size: 100,
    hide: true,
  },
  {
    accessorKey: "expected_output",
    header: "EXPECTED OUTPUT",
    size: 300,
    hide: true,
  },
  {
    accessorKey: "funding_source",
    header: "FUNDING SOURCE",
    size: 135,
  },
  {
    accessorKey: "capital_outlay",
    header: "CAPITAL OUTLAY",
    size: 100,
  },
  { accessorKey: "total", header: "TOTAL", minWidth: 100 },
];

export const usersPropsTable = [
  {
    columnVisibility: {
      id: false,
    },
  },
];

// const columns = useMemo(() => [
//   { field: "id", headerName: "ID", flex: 1, hide: true },
//   {
//     field: "aip_reference_code",
//     headerName: "AIP",
//     minWidth: 130,
//   },

//   {
//     field: "projectTitle",
//     headerName: "PROJECT NAME",
//     minWidth: 300,
//     maxWidth: 700,
//     flex: 1,
//     valueGetter: getFullName,
//   },
//   {
//     field: "implementing_office",
//     headerName: "IMPLEMENTING OFFICE",
//     minWidth: 175,
//     hide: true,
//   },
//   {
//     field: "starting_date",
//     headerName: "Starting Date",
//     minWidth: 100,
//     hide: true,
//   },
//   {
//     field: "completion_date",
//     headerName: "Completion Date",
//     minWidth: 100,
//     hide: true,
//   },
//   {
//     field: "expected_output",
//     headerName: "EXPECTED OUTPUT",
//     minWidth: 300,
//     hide: true,
//   },
//   { field: "funding_source", headerName: "FUNDING SOURCE", minWidth: 135 },
//   { field: "capital_outlay", headerName: "CAPITAL OUTLAY", minWidth: 100 },
//   { field: "total", headerName: "TOTAL", minWidth: 100 },
//   {
//     field: "project_status",
//     headerName: "Status",
//     minWidth: 120,

//     renderCell: (params) => {
//       return (
//         <>
//           {params.row.project_status === "Not Funded" ? (
//             <>
//               <Chip label="Not Funded" variant="outlined" color="warning" />
//             </>
//           ) : (
//             <>
//               <Chip
//                 label="Funded"
//                 variant="outlined"
//                 color="success"
//                 sx={{ minWidth: 90 }}
//               />
//             </>
//           )}
//         </>
//       );
//     },
//   },
//   {
//     field: "action",
//     headerName: "Action",
//     minWidth: 385,
//     renderCell: (params) => {
//       return (
//         <>
//           <Stack direction="row" spacing={2} justifyContent="space-evenly">
//             <ActionButton
//               size="small"
//               variant="contained"
//               startIcon={<BorderColor />}
//               color="success"
//               label="Edit"
//               onClick={() => handleEdit({ ...{ params } })}
//             />

//             <ActionButton
//               size="small"
//               variant="contained"
//               startIcon={<DeleteOutline />}
//               onClick={() => handleDelete(params.row.id)}
//               color="error"
//               label="Delete"
//             />
//             <ActionButton
//               size="small"
//               variant="contained"
//               startIcon={<Architecture />}
//               onClick={() => handleInfrastructure({ ...{ params } })}
//               color="info"
//               label="Infrastructure"
//             />
//           </Stack>
//         </>
//       );
//     },
//   },
// ]);
