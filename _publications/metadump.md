---
title: "Gromacs MetaDump: a tool for extracting GROMACS simulation metadata"
collection: publications
permalink: /publication/metadump
excerpt: ''
date: 2025-10-23
paperurl: 'https://doi.org/10.1186/s13321-025-01082-5'
venue: Journal of Chemoinformatics
---
**Authors**: Rošinec A., Slanináková T., Pavlík T., Randiak R., Svoboda T., Raček T., Bučeková G., Schindler O., Antol M., Křenek A., Berka K., Svobodová R.

The volume of molecular dynamics (MD) simulation data shared via public repositories is rapidly increasing; however, fragmentation across multiple independent repositories, each employing distinct dataset identifiers and metadata schemas, hinders the efficient exploration and reuse of these data. In this study, we present GROMACS MetaDump, a tool for automatic annotation of output files from GROMACS MD simulations producing human- and machine-readable metadata leveraging the native GROMACS metadata (gmx dump) output. The tool takes the run input simulation file (.tpr) as the basis for the metadata output, optionally extending it with annotations from topology and structure files (.top, .gro). The tool is available as a web application [(https://gmd.ceitec.cz/)](https://gmd.ceitec.cz/), API service, and a command-line utility. By automating the metadata extraction process, GROMACS MetaDump aims to simplify and standardise the extraction of rich, structured metadata from GROMACS MD simulations, making it easier to share, discover, and reuse simulation data within the research community.

[Code](https://github.com/sb-ncbr/gromacs-metadump)
[Find paper here](https://doi.org/10.1186/s13321-025-01082-5)