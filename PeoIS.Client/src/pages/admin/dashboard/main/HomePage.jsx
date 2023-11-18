import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Chip,
  Container,
  Divider,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import {
  fetchSummaryFundedProjects,
  fetchSummaryNotFundedProjects,
  fetchSummaryProjects,
} from "../../../../api/summary_api";

import CountUp from "react-countup";
import { ArrowRight } from "@material-ui/icons";

import { fToNow } from "../../../../utils/formatTime";
import { fetchProjectsActivity } from "../../../../api/activityLogController";

const SummaryWidget = ({ title, number, cardColor }) => {
  return (
    <Card sx={{ backgroundColor: cardColor }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" color="#fff">
            {title}
          </Typography>

          <Typography variant="h3" color="#fff">
            <CountUp start={0} end={number} duration={1.5} separator="," />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [totalProject, setTotalProject] = useState();
  const [funded, setFunded] = useState();
  const [notFunded, setNotFunded] = useState();
  const [activityLogList, setActivityLogList] = useState([]);

  useEffect(async () => {
    setTotalProject(await fetchSummaryProjects());
    setFunded(await fetchSummaryFundedProjects());
    setNotFunded(await fetchSummaryNotFundedProjects());

    const res = await fetchProjectsActivity();
    setActivityLogList(res);
  }, []);

  return (
    <>
      <Box>
        {/* <Paper elevation={24} sx={{ minHeight: "88vh" }}> */}
        <Grid container spacing={2} p={2}>
          <Grid item xs={12}></Grid>
          <Grid item xs={3}>
            <SummaryWidget
              title={"Projects"}
              number={totalProject}
              cardColor="#039be5"
            />
          </Grid>
          <Grid item xs={3}>
            <SummaryWidget
              title={"Funded"}
              number={funded}
              cardColor="#8bc34a"
            />
          </Grid>
          <Grid item xs={3}>
            <SummaryWidget
              title={"Not Funded"}
              number={notFunded}
              cardColor="#f44336"
            />
          </Grid>
          <Grid item xs={3}>
            <SummaryWidget title={"Roads"} number={42} cardColor="#6d4c41" />
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={12}>
              <Card>
                <CardHeader title="Activity Log" />

                <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
                  {activityLogList?.map((news) => (
                    <NewsItem key={news.id} news={news} />
                  ))}
                </Stack>

                <Divider />

                <Box sx={{ p: 2, textAlign: "right" }}>
                  <Button size="small" color="inherit" endIcon={<ArrowRight />}>
                    View all
                  </Button>
                </Box>
              </Card>
            </Paper>
          </Grid>
        </Grid>
        {/* </Paper> */}
      </Box>
    </>
  );
};

export default Home;

function NewsItem({ news }) {
  const { project, updated_at, event, new_values, old_values } = news;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box sx={{ minWidth: 240, flexGrow: 1 }}>
        <Link color="inherit" variant="subtitle2" underline="hover" noWrap>
          {event === "deleted" ? (
            <>
              <Chip
                label={event}
                variant="outlined"
                color="error"
                sx={{ p: 0, m: 0, marginRight: 1 }}
              />
              {old_values ? old_values.project_name : null}
            </>
          ) : (
            <>
              <Chip
                label={event}
                variant="outlined"
                color={event === "created" ? "info" : "success"}
                sx={{ p: 0, m: 0, marginRight: 1 }}
              />
              {project ? project.project_name : null}
            </>
          )}
        </Link>

        <Typography
          variant="body2"
          sx={{ color: "text.secondary", marginLeft: 10.5 }}
          noWrap
        >
          {project ? project.expected_output : old_values.expected_output}
          {/* {Object.entries(old_values).map(([key, value]) => (
            <div key={key}>
              {key}: {value}
            </div>
          ))} */}
        </Typography>
      </Box>

      <Typography
        variant="caption"
        sx={{ pr: 3, flexShrink: 0, color: "text.secondary" }}
      >
        {fToNow(updated_at)}
      </Typography>
    </Stack>
  );
}
