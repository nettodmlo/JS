alturas_homens = []
alturas_mulheres = []
genero_homem = []
genero_mulher = []

for i in range(0, 15):
    genero = input("Qual o sexo? M ou F? ")

    if genero == "M":
        altura = float(input("Qual sua altura? "))
        genero_homem.append(genero)
        alturas_homens.append(altura)
    elif genero == "F":
        altura = float(input("Qual sua altura? "))
        genero_mulher.append(genero)
        alturas_mulheres.append(altura)
    else:
        print("Informe se o genero é M ou F")

maior_altura = 0
for i in alturas_mulheres:
    if i > maior_altura:
        maior_altura = i

for i in alturas_homens:
    if i > maior_altura:
        maior_altura = i

menor_altura = 0
for i in alturas_mulheres:
    if menor_altura == 0:
        menor_altura = i
    elif i < menor_altura:
        menor_altura = i

for i in alturas_homens:
    if menor_altura == 0:
        menor_altura = i
    elif i < menor_altura:
        menor_altura = i

media_altura_homens = sum(alturas_homens) / len(alturas_homens)

print(f"Maior altura: {maior_altura}")
print(f"Menor altura: {menor_altura}")
print(f"Média da altura masculina: {media_altura_homens}")
print("Quantidade de mulheres: ", len(alturas_mulheres))
