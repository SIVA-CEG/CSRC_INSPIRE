import React, { useRef, useState } from "react";
import html2pdf from "html2pdf.js";

import {
  X,
  Download,
  Printer,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut
} from "lucide-react";

import PDFTemplate from "./PDFTemplate";
import "./ClaimPreview.css";

export default function ClaimPreview({
  claim,
  onClose
}) {

  const pdfRef = useRef();

  const [page,setPage] = useState(1);
  const [zoom,setZoom] = useState(1);

  const generatePDF = () => {

    html2pdf()
      .set({
        margin:0.3,

        filename:
        `Claim-${claim.id}.pdf`,

        image:{
          type:"jpeg",
          quality:1
        },

        html2canvas:{
          scale:2
        },

        jsPDF:{
          unit:"in",
          format:"a4",
          orientation:"portrait"
        }
      })
      .from(pdfRef.current)
      .save();
  };

  const printPDF = () => {
    window.print();
  };

  return (

    <div className="preview-overlay">

      <div className="preview-modal">

        <div className="preview-header">

          <div>

            <h2>
              Fellowship Claim Preview
            </h2>

            <span>
              Generated CSRC Document
            </span>

          </div>

          <div className="toolbar">

            <button
              onClick={()=>
                setZoom(z=>z-0.1)
              }
            >
              <ZoomOut size={18}/>
            </button>

            <button
              onClick={()=>
                setZoom(z=>z+0.1)
              }
            >
              <ZoomIn size={18}/>
            </button>

            <button
              onClick={printPDF}
            >
              <Printer size={18}/>
            </button>

            <button
              onClick={generatePDF}
            >
              <Download size={18}/>
            </button>

            <button
              onClick={onClose}
            >
              <X size={18}/>
            </button>

          </div>

        </div>

        <div className="page-nav">

          <button
            onClick={()=>
              setPage(p=>
                Math.max(1,p-1)
              )
            }
          >
            <ChevronLeft size={18}/>
          </button>

          <span>
            Page {page} of 3
          </span>

          <button
            onClick={()=>
              setPage(p=>
                Math.min(3,p+1)
              )
            }
          >
            <ChevronRight size={18}/>
          </button>

        </div>

        <div
          className="pdf-container"
          style={{
            transform:
            `scale(${zoom})`
          }}
        >

          <div ref={pdfRef}>

            <PDFTemplate
              claim={claim}
              currentPage={page}
            />

          </div>

        </div>

      </div>

    </div>
  );
}