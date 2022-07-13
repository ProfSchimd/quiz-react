# Quiz React
A `React` project for the Quiz page of [ProfSchimd website][1]. The project displays a page
with several questions loaded from a `JSON` file suitable formatted (see [Question format](#question-format)). The questions can be of different type (see [Question type](#question-type)
section below) and the order in which they appear is randomized. Currently, it is not possible
to customize the behavior of the quiz since it is intended as an aid during studying rather than a
tool for testing and scoring. Furthermore, the project is designed to work in a fully static
website without need of a *backend* server running (although it could be easily extended by
simply rewriting the questions retrieval code).

This project is a *work-in-progress*, the code will change frequently and features may be
buggy and/or incomplete.. See the [Known issue](#known-issue) section below for more information
on known bugs and future improvements.

## Question type
Currently three question types are supported:

* **Fill** question requiring input in one or more text fields;
* **Single** choice where one among many answer is the correct one;
* **Multiple** choices where the correct answer(s) must be selected.

### Question weight
Each question is associated with a *weight* that is used to score the question. Currently,
the project has a built-in system to identify easy, intermediate, and hard questions so to
visualize this information.

## Question format
The question file is in `JSON` format, 

## Known issue
The following are known issue:

* All questions are shown and there is no limit to the number listed.
* Verifying the answers only changes points for questions (poor feedback)
* `Reset` button currently not working

The following are some enhancements that could be soon implemented:

* ~~Lack of the total score~~.
* Randomization of choices (need to act at data pre-processing level).
* Ignore case fill option (the file format would change, but backward compatibility is desireable).
* Explain feature for more feedback after checking the results (data model will change).

[1]: [https://profschimd.github.io]

