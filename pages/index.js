import { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { FileTable } from "@/components/entry";
import { Layout } from "@/components/layouts";
import { filesApi } from "@/consume-apis";

export default function EntryPage(props) {
  const { files, filesName } = props;

  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);
  const [filesData, setFilesData] = useState([]);

  const handleSelectChange = (event) => {
    setFile(event.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      if (file === "") return setFilesData([...files]);
      setLoading(true);
      const { data } = await filesApi.get(`/files/data?fileName=${file}`);
      setFilesData([...data]);
      setLoading(false);
    }
    fetchData();
  }, [file, files]);

  return (
    <Layout
      title="Files page"
      pageDescription={"This page is to visualize the system files"}
    >
      <h1>Entry page</h1>
      <FormControl
        variant="standard"
        fullWidth
        sx={{ marginBottom: 5, marginTop: 5, m: 1, minWidth: 300 }}
      >
        <InputLabel id="file-select-label">FileName</InputLabel>
        <Select
          labelId="file-select-label"
          id="file-select-input"
          value={file}
          onChange={handleSelectChange}
          label="File"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {filesName.map((file) => (
            <MenuItem value={file} key={file}>
              {file}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {loading ? <CircularProgress /> : <FileTable files={filesData} />}
      </Box>
    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  const { data } = await filesApi.get("/files/data");
  return {
    props: {
      files: [...data],
      filesName: [...data.map((file) => file.file)],
    },
  };
};
