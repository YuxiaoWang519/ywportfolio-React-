import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import { fontSize } from '@mui/joy/styles/styleFunctionSx';
import "../styles/CardP.css"

export default function CardToProjects() {
  return (
    <Card className="CardContainer"
      row
      variant="outlined"
      sx={{
        minWidth: '260px',
        gap: 2,
        background: ' linear-gradient(45deg, rgba(4,4,4,1) 0%, rgba(48,75,80,1) 45%, rgba(10,134,159,1) 100%);',
        width:"100%",
        
        
        
      }}
    >
        <CardOverflow
        variant="soft"
        
        sx={{
          px: 0.2,
          color:"#d4d7d7",  
          writingMode: 'vertical-rl',
          textAlign: 'center',
          fontSize: '0.5vw',
          fontWeight: 'xl2',
          letterSpacing: '1px',
          textTransform: 'uppercase',
        }}
      >
            &lt;ToProjects&gt;
      </CardOverflow>
      <CardContent>
        <Typography fontWeight="md" textColor="success.plainColor" mb={0.5} className="tText">
          View my Projects 
        </Typography>
        
      </CardContent>
      <CardOverflow
        variant="soft"
        color="primary"
        sx={{
          px: 0.2,
          writingMode: 'vertical-rl',
          textAlign: 'center',
          fontSize: '0.5vw',
          fontWeight: 'xl2',  
          letterSpacing: '1px',
          textTransform: 'uppercase',
        }}
      >
        &lt;ToProjects&gt;
      </CardOverflow>
    </Card>
  );
}
