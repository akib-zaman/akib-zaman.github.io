import React, { useState } from 'react';
import './publications.css'; // Make sure to create this CSS file for styling


const publications = [
  {
    title: "BraidFlow: A Flow-annotated Dataset of Kumihimo Braidmaking Activity",
    authors: "Akib Zaman, Shreyosi Endow, Mohammad Abu Nasir Rakib, Cesar Torres",
    conference: "Proceedings of the 2023 ACM Designing Interactive Systems Conference, 2023",
    abstract: "Entering a cognitive state of flow is a natural response of the mind that allows people to fully concentrate and cope with tedious, and often repetitive tasks. Understanding how to trigger or sustain flow remains limited by retrospective surveys, presenting a need to better document flow. Through a validation study, we first establish braidmaking as a flow-inducing task. We then study how braidmaking can be used to unpack the experience of flow on a moment-by-moment basis. Using an instrumented Kumihimo braid-making tool and off-the-shelf biosignal wristbands, we record the experiences of 24 users engaged in 3 different braidmaking tasks. Feature vectors motivated from flow literature were extracted from activity data (IMU, EMG, EDA, heart rate, skin temperature, braiding telemetry) and annotated with Flow Short Scale (FSS) scores. Together, this dataset and data-capture system form the frst open-access and holistic platform for mining flow data and synthesizing flow-aware design principles.",
    link: "https://dl.acm.org/doi/pdf/10.1145/3563657.3596026"
  },
  {
    title: "Multi-modal image prediction via spatial hybrid U-Net",
    authors: "Akib Zaman, Lu Zhang, Jingwen Yan, Dajiang Zhu",
    conference: "Multiscale Multimodal Medical Imaging: First International Workshop, MMMI 2019, Held in Conjunction with MICCAI 2019",
    abstract: "Cortical folding patterns and white matter connectivity together compose the structural organization of the human brain. Gray matter and gyrification describe the geometric characteristics of the cortical surface, and the wiring of white matter represents the structural pathways inside the brain. Many studies suggest that there exists a close relationship between gray matter and white matter. However, given the widely existing variability and complexity of brain structures, it is still largely unknown to what extent white matter wiring can influence gray matter and folding patterns. As an attempt to discover the potential relationship between gray matter and white matter, in this work, we developed a novel spatial hybrid U-Net framework for multi-modal image prediction: we aim to predict T1-weighted Magnetic Resonance Imaging (MRI) based on Diffusion Tensor Imaging (DTI) data. Specifically, when predicting local intensity for T1 data, we constructed a hybrid model to integrate both local tensor information and the FA (Fractional Anisotropy) measure from remote brain regions connected by DTI-derived fibers. To alleviate computational effort and reduce memory consumption, we proposed a multi-stage 2D training scheme instead of using a 3D convolutional neural network. Our results showed 80% accuracy for prediction, and the reconstructed cortical surface using predicted T1 data is highly consistent with the original T1-derived surface. We envision that the proposed method can not only lay down a foundation for multi-modality inference but also bring new insights into understanding brain structure as well.",
    link: "https://link.springer.com/chapter/10.1007/978-3-030-37969-8_1"
  },
  {
    title: "A cascaded multi-modality analysis in mild cognitive impairment",
    authors: "Lu Zhang, Akib Zaman, Li Wang, Jingwen Yan, Dajiang Zhu",
    conference: "Machine Learning in Medical Imaging: 10th International Workshop, MLMI 2019, Held in Conjunction with MICCAI 2019",
    abstract: "Though reversing the pathology of Alzheimer’s disease (AD) has so far not been possible, a more tractable goal may be the prevention or slowing of the disease when diagnosed in its earliest stage, such as mild cognitive impairment (MCI). Recent advances in deep modeling approaches have triggered a new era for AD/MCI classification. However, it is still difficult to integrate multi-modal imaging data into a single deep model to gain as much benefit as possible from complementary datasets. To address this challenge, we propose a cascaded deep model to capture both brain structural and functional characteristics for MCI classification. With diffusion tensor imaging (DTI) and functional magnetic resonance imaging (fMRI) data, a graph convolutional network (GCN) is constructed based on the brain structural connectome, and it works with a one-layer recurrent neural network (RNN), which is responsible for inferring the temporal features from brain functional activities. We named this cascaded deep model the Graph Convolutional Recurrent Neural Network (GCRNN). Using the Alzheimer’s Disease Neuroimaging Initiative (ADNI-3) dataset as a test-bed, our method can achieve 97.3% accuracy in distinguishing normal controls (NC) from MCI patients.",
    link: "https://link.springer.com/chapter/10.1007/978-3-030-32692-0_64"
  },
];

const Publications = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAbstract = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="publications-section">
      <h2 className="section-title">Publications</h2>
      <ul className="publications-list">
        {publications.map((publication, index) => (
          <li className="publication" key={index}>
            <p className="publication-title">
              "{publication.title}" <br />
              <strong>{publication.authors}</strong>, <br />
              <em>{publication.conference}</em>
            </p>
            {activeIndex === index && (
              <p className="publication-abstract">{publication.abstract}</p>
            )}
            <button className="btn abstract-btn" onClick={() => toggleAbstract(index)}>
              {activeIndex === index ? <><i className="fas fa-minus"></i> Hide Abstract</> : <><i className="fas fa-plus"></i> Show Abstract</>}
            </button>
            <a href={publication.link} className="btn read-more-btn" target="_blank" rel="noopener noreferrer">
              Read More
            </a>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default Publications;