using System;
using System.Collections.Generic;

namespace Vaccination
{

    //Initialize Vaccinaton details
    class VaccineInfo
    {
        public VacType vaccineType { get; set; }
        public string dosage { get; set; }
        public DateTime vaccinatedDate { get; set; }

        public VaccineInfo(VacType vaccineType1, DateTime vaccinatedDate1)
        {
            this.vaccineType = this.vaccineType;
            this.vaccinatedDate = vaccinatedDate1;
        }

    }

    // Creating enum for vaccines
    public enum VacType
    {
        Co_vaccine = 1,
        Covishield,
        Sputnic
    }

    //Initialize Beneficiary details
    class BeneficiaryInfo
    {
        private static int _idNo = 1000;               //Id that auto increment

        public int registrationNumber { get; set; }
        public string beneficiaryName { get; set; }
        public int age { get; set; }
        public int gender { get; set; }
        public long mobile_Number { get; set; }
        public string city { get; set; }

        public List<VaccineInfo> VaccinationDetails
        {
            get; set;
        }


        public BeneficiaryInfo(string name, int age1, Genderr gender1, long phNumber, string city1)
        {
            this.beneficiaryName = name;
            this.age = age1;
            this.gender = this.gender;
            this.mobile_Number = phNumber;
            this.city = city1;
            this.registrationNumber = _idNo++;

        }



    }

    //Creating enum for gender
    public enum Genderr
    {
        Male = 1,
        Female,
        Others
    }

    class Program
    {
        private static List<BeneficiaryInfo> benificiaries = new List<BeneficiaryInfo>();
        static void Main(string[] args)
        {

            Program user = new Program();

            //Getting default user details and add it to the beneficiary list

            var data1 = new BeneficiaryInfo("Bala", 21, (Genderr)2, 8825914020,"Rajapalayam");

            var data2 = new BeneficiaryInfo("Vijay", 20, (Genderr)2, 9012345687, "Chennai");

            var data3 = new BeneficiaryInfo("karthi", 31, (Genderr)1, 9098767876, "Kumarapuram");

            benificiaries.Add(data1);

            benificiaries.Add(data2);

            string choice;
            Console.WriteLine("!!!--------- VACCINATION DRIVE-----------!!!");

            Console.WriteLine();

            Console.WriteLine("------------------------------------------");
            do
            {
                Console.WriteLine("-----------------  MAIN MENU ------------------- ");

                Console.WriteLine("\n Press 1 -> Beneficiary Registration \n 2 -> Vaccination \n 3 -> Exit \n");

                Console.WriteLine("--------------------------------------");

                Console.WriteLine("Select Option -->");

                int option = int.Parse(Console.ReadLine());

                switch (option)
                {
                    case 1:
                        user.BenificiaryRegistration();             //calling method
                        break;
                    case 2:
                        user.Vaccination();
                        break;
                    case 3:
                        Environment.Exit(-1);
                        break;
                    default:
                        Console.WriteLine("Enter Valid Input...!");
                        break;

                }
                Console.WriteLine("-------------------------------------");

                Console.WriteLine("Do you want to enter another person details -(Yes/NO)??");

                choice = Console.ReadLine().ToUpper();

            } while (choice == "YES");

            Console.ReadKey();

        }

        // Add beneficiary details
        public void BenificiaryRegistration()                          //Creating Method
        {

            Console.WriteLine("Enter Benificiary Name:");
            string beneficiaryName = Console.ReadLine();

            Console.WriteLine("Enter Benificiary Age:");
            int age = int.Parse(Console.ReadLine());

            Console.WriteLine("Choose Your Gender:");

            Console.WriteLine("\n 1 --> Male\n 2 --> Female \n 3 --> Others");

            Genderr gender = (Genderr)int.Parse(Console.ReadLine());

            Console.WriteLine("Enter PhoneNumber:");

            long mobile_Number = long.Parse(Console.ReadLine());

            Console.WriteLine("Enter Benificiary City:");

            string city = Console.ReadLine();


            var data3 = new BeneficiaryInfo(beneficiaryName, age, (Genderr)gender, mobile_Number, city);

            benificiaries.Add(data3);

            Console.WriteLine("***Registration Successfully***");

            Console.WriteLine($"Your Registration Number is: {data3.registrationNumber}");

        }


        // Vaccination Process
        public void Vaccination()                               //Creating Method
        {

            string option;

            Console.WriteLine("--------------------------------");

            Console.WriteLine("--------Vaccine Details---------");

            Console.WriteLine("--------------------------------");

            Console.WriteLine("Enter Your Registration Number:");

            int regNo = int.Parse(Console.ReadLine());

            //foreach loop for recognize reg id and generate he is register or not

            foreach (BeneficiaryInfo details in benificiaries)
            {
                if (details.registrationNumber == regNo)
                {
                    Console.WriteLine($"Welcome Mr/Ms :{details.beneficiaryName}");

                    Console.WriteLine("--------------------------------");

                    do
                    {
                        Console.WriteLine("--------------------------------");

                        Console.WriteLine("\n 1 --> Take Vaccination \n 2 --> Vaccination History\n 3 --> Next Due Date \n 4 --> Exit \n");
                        Console.WriteLine("-----------------------------------------------------------");
                        Console.WriteLine("   Select Option   ");

                        int choice = int.Parse(Console.ReadLine());

                        //Which vaccine you want based on that the operation is done

                        switch (choice)
                        {
                            case 1:
                                Console.WriteLine("Which Vaccine Do you want ?");

                                Console.WriteLine("1.CoVaccine \n 2.Covishield \n 3.Sputnic\n");

                                Console.WriteLine("--------------------------------");

                                Console.WriteLine("Choose your option: ");

                                VacType VaccineType = (VacType)int.Parse(Console.ReadLine());

                                if (details.registrationNumber == regNo)

                                {
                                    VaccineInfo user = new VaccineInfo(VaccineType, DateTime.Now);

                                    if (details.VaccinationDetails == null)
                                    {

                                        details.VaccinationDetails = new List<VaccineInfo>();
                                    }
                                    details.VaccinationDetails.Add(user);
                                }

                                Console.WriteLine("Successfully vaccinated!...");
                                break;

                            case 2:
                                VaccinationHistory(regNo);
                                break;

                            case 3:
                                NextDueDate(regNo);
                                break;

                            case 4:
                                Environment.Exit(-1);
                                break;

                            default:
                                Console.WriteLine("Enter Valid Input");
                                break;

                        }
                        Console.WriteLine("Do you want to continue -(Yes/NO)??");
                        option = Console.ReadLine().ToUpper();

                    } while (option == "YES");
                }

            }
        }

        // vaccine histories for how many dose they vaccinated

        public void VaccinationHistory(int registerNumber)
        {

            foreach (BeneficiaryInfo history in benificiaries)
            {
                if (history.registrationNumber == registerNumber)

                {
                    if (history.VaccinationDetails != null)
                    {
                        Console.WriteLine($"Registratuion Number:{ history.registrationNumber} \n BeneficiaryName:{history.beneficiaryName}\n Vaccinated Dose: {history.VaccinationDetails.Count}");
                    }

                }

            }
        }

        //Due date for next due date using AddDays method

        public void NextDueDate(int regNo)
        {
            foreach (BeneficiaryInfo duedate in benificiaries)
            {
                if (duedate.registrationNumber == regNo)
                {
                    if (duedate.VaccinationDetails != null)
                    {
                        if (duedate.VaccinationDetails.Count == 1)
                        {

                            Console.WriteLine("You are vaccinated by " + duedate.VaccinationDetails.Count);
                            Console.WriteLine("Your next Due Date is: " + duedate.VaccinationDetails[0].vaccinatedDate.AddDays(30));

                        }
                        else if (duedate.VaccinationDetails.Count == 2)
                        {
                            Console.WriteLine("You have completed the vaccination course. Thanks for your participation in the vaccination drive.");
                        }

                    }
                }

            }

        }

    }
}