import React, { useState } from "react";
import { DataGrid, GridToolbar, gridClasses } from "@mui/x-data-grid";
import LinearProgress from "@mui/material/LinearProgress";

import {
  Button,
  ButtonBase,
  CircularProgress,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { grey } from "@mui/material/colors";

const StyledToolbar = styled(DataGrid)({
  height: 52,
});

const DataGridComponent = ({ rows, columns, loading }) => {
  const [pageSize, setPageSize] = useState(10);

  return (
    <DataGrid
      loading={loading}
      rows={rows}
      columns={columns}
      sx={{
        // "&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell": {
        //   py: "8px",
        // },
        // "&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell": {
        //   py: "15px",
        // },
        // "&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell": {
        //   py: "22px",
        // },
        "& .MuiDataGrid-row": {
          maxHeight: "none !important",
        },
        "& .MuiDataGrid-renderingZone": {
          maxHeight: "none !important",
        },
        "& .MuiDataGrid-cell": {
          lineHeight: "unset !important",
          maxHeight: "none !important",
          whiteSpace: "normal",
        },
        "&  .MuiDataGrid-cell:focus-within": {
          outline: "none !important",
        },

        // minHeight: "77vh",
        // width: "500px",
        // [`& .${gridClasses.row}`]: {
        //   bgcolor: (theme) =>
        //     theme.palette.mode === "light" ? grey[200] : grey[900],
        // },
      }}
      components={{ Toolbar: GridToolbar, LoadingOverlay: LinearProgress }}
      // disableSelectionOnClick
      pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      rowsPerPageOptions={[10, 50, 100]}
      pagination
      autoPageSize={false}
      autoHeight

      // getRowSpacing={(params) => ({
      //   top: params.isFirstVisible ? 0 : 5,
      //   bottom: params.isLastVisible ? 0 : 5,
      // })}
    />
  );
};

export default DataGridComponent;
